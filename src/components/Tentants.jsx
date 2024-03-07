import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';

import AddIcon from '@mui/icons-material/Add';

import Input from "./Input.jsx";

import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { createTentantsInCard, updateTentantsInCard } from '../api/api.js';

import { addNewTentant, joinTentant, setTentantData } from "../slices/tagSlice.jsx";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { ListItemAvatar, ListItemText, TextField } from '@mui/material';


export default function Tentants({

}) {
    const objectStorage = useSelector(state => state.tagMore.value),
    tentans = useSelector(state => state.tentants.value),
    objectStorageTentants = objectStorage.tenantsInfo,
    dispatch = useDispatch();


    const [isOpenSelect, setIsOpenSelect] = useState(true);

    const clickAddNewTentant = () => {
        dispatch(addNewTentant());
    };

    const clickSelectTentant = (tentant, index) => {
        clickAddNewTentant();
        
        dispatch(joinTentant({tentant, index}));
        setIsOpenSelect(false);
    }

    const clickSaveChanges = async () => {
        const createNewTentantInObject = objectStorage.tenantsInfo.filter(tentant => tentant.type === 'create'),
        updateTentantInObject = objectStorage.tenantsInfo.filter(tentant => tentant.type === 'update');

        createNewTentantInObject.length > 0 ? await createTentantsInCard(createNewTentantInObject.map(tentant => {
            const newTentant = {
                ...tentant,
            };

            newTentant.tentantId = newTentant.tentant.id;

            delete newTentant.type;
            delete newTentant.tentant;
            

            return newTentant;
        }), objectStorage.id)
        : 
        null;

        updateTentantInObject.length > 0 ? await updateTentantsInCard(updateTentantInObject.map(tentant => {
            const newTentant = {
                ...tentant,
                rentFlow: {
                    ...tentant.rentFlow,
                },
            };

            newTentant.tentantId = newTentant.tentant.id;
            newTentant.rentFlow.mouth = newTentant.rentFlow.mount;


            delete newTentant.rentFlow.mount;
            delete newTentant.type;
            delete newTentant.tentant;
            

            return newTentant;
        }), objectStorage.id)
        : null;

        console.log({ updateTentantInObject, createNewTentantInObject });
    };

    return (
        <>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    objectStorage.tenantsInfo.length > 0 ?
                        <>
                            
                            { 
                                objectStorage.tenantsInfo.map((tentantInObject, index) => {
                                    return (
                                        <>
                                            {
                                                !tentantInObject.tentant.id ?
                                                <>
                                                    <FormControl sx={{ width: '100%' }}>
                                                        <InputLabel id="select-label">Выбрать арендатора</InputLabel>
                                                        <Select
                                                            sx={{ width: '100%' }}
                                                            className="w-full"
                                                            open={isOpenSelect}
                                                            id="select"
                                                            onClick={e => {
                                                                if(e.target.id === 'select') setIsOpenSelect(true);
                                                            }}
                                                            labelId="select-label"
                                                        >
                                                            {
                                                                tentans.length > 0 ?
                                                                <>
                                                                    <MenuItem disabled value="">
                                                                        <em>Выберете арендатора</em>
                                                                    </MenuItem>
                                                                    {
                                                                        [...tentans].map(tentant => {
                                                                            return (
                                                                                <MenuItem
                                                                                    onClick={e => clickSelectTentant(tentant, index)}
                                                                                    key={tentant.id}
                                                                                    value={tentant.id}
                                                                                >
                                                                                    {tentant.name}
                                                                                </MenuItem>
                                                                            )
                                                                        })
                                                                    }
                                                                </>
                                                                :
                                                                <>
                                                                    Сначала создайте арендаторов
                                                                </>
                                                            }
                                                        </Select>
                                                    </FormControl>
                                                </>
                                                :
                                                <ListItem 
                                                    sx={{ width: "100%" }}
                                                    key={tentantInObject.tentant.id}
                                                >
                                                    <div className='flex flex-col'>
                                                        <div className='flex items-center'>
                                                            <ListItemAvatar>
                                                                <img 
                                                                    width="200" 
                                                                    height="200" 
                                                                    src={`http://79.174.82.17:8080/public/${tentantInObject.tentant.logo}`} 
                                                                />
                                                            </ListItemAvatar>
                                                            <ListItemText 
                                                                primary={tentantInObject.tentant.name}
                                                                secondary={tentantInObject.tentant.category}
                                                            />
                                                        </div>
                                                        
                                                        <div className='flex gap-4 items-end'>
                                                            <TextField
                                                                variant="standard"
                                                                label="Индексация"
                                                                type="number"
                                                                defaultValue={tentantInObject.indexation}
                                                                onBlur={e => {
                                                                    const newTentant = {
                                                                        ...tentantInObject
                                                                    }


                                                                    newTentant.indexation = +e.target.value;

                                                                    dispatch(setTentantData({ 
                                                                        id: index, 
                                                                        data: newTentant, 
                                                                        type: !!tentantInObject.indexation ? 'update': 'create'  
                                                                    }))
                                                                }}
                                                            />
                                                            <TextField
                                                                variant="standard"
                                                                label="Договор"
                                                                defaultValue={tentantInObject.contract}
                                                                onBlur={e => {
                                                                    const newTentant = {
                                                                        ...tentantInObject
                                                                    }

                                                                    newTentant.contract = e.target.value;
                                                                    dispatch(setTentantData({ 
                                                                        id: index, 
                                                                        data: newTentant,
                                                                        type: !!tentantInObject.contract ? 'update': 'create'  
                                                                    }))
                                                                }}
                                                            />
                                                            <TextField
                                                                variant="standard"
                                                                label="Месячный арендный поток"
                                                                type="number"
                                                                defaultValue={!!tentantInObject.rentFlow.mount ? tentantInObject.rentFlow.mount: tentantInObject.rentFlow.mounth}
                                                                onBlur={e => {
                                                                    const newTentant = {
                                                                        ...tentantInObject,
                                                                        rentFlow: {
                                                                            ...tentantInObject.rentFlow,
                                                                        },
                                                                    }

                                                                    newTentant.rentFlow.mount = +e.target.value;

                                                                    dispatch(setTentantData({ 
                                                                        id: index, 
                                                                        data: newTentant,
                                                                        type: !!tentantInObject.rentFlow.mount || tentantInObject.rentFlow.mount === null  ? 'update': 'create' 
                                                                    }))
                                                                }}
                                                            />
                                                            <TextField
                                                                variant="standard"
                                                                label="Годовой арендный поток"
                                                                type="number"
                                                                defaultValue={tentantInObject.rentFlow.year}
                                                                onBlur={e => {
                                                                    const newTentant = {
                                                                        ...tentantInObject,
                                                                        rentFlow: {
                                                                            ...tentantInObject.rentFlow,
                                                                        },
                                                                    }

                                                                    newTentant.rentFlow.year = +e.target.value;
                                                                    dispatch(setTentantData({ 
                                                                        id: index, 
                                                                        data: newTentant,
                                                                        type: !!tentantInObject.rentFlow.year ? 'update': 'create' 
                                                                    }))
                                                                }}
                                                            />
                                                            <div>
                                                                <em>Добавлять разные элементы через запятую</em>
                                                                <TextField
                                                                    label="Детализация"
                                                                    variant="standard"
                                                                    defaultValue={tentantInObject.detalization.join(",")}
                                                                    onBlur={e => {
                                                                        const newTentant = {
                                                                            ...tentantInObject
                                                                        }

                                                                        newTentant.detalization = e.target.value.split(",");

                                                                        dispatch(setTentantData({ 
                                                                            id: index, 
                                                                            data: newTentant,
                                                                            type: tentantInObject.detalization.length > 0 ? 'update': 'create' 
                                                                        }));
                                                                    }}
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </ListItem>
                                            }
                                        </>
                                    )
                                })
                            }
                            <Button onClick={() => clickAddNewTentant()}>
                                Добавить нового арендатора
                                <AddIcon/>
                            </Button>
                        </>
                        :
                        <>
                            <Button onClick={() => clickAddNewTentant()}>
                                Добавить нового арендатора
                                <AddIcon/>
                            </Button>
                        </>
                }
            </List>

            <Button onClick={() => clickSaveChanges()}>
                Сохранить изменения!
            </Button>
        </>
    )
}