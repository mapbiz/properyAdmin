import {Page, Text, View, Document, StyleSheet, PDFViewer, Font, Image, Link} from '@react-pdf/renderer';
// Импортируйте шрифт
import InterRegular from '../../fonts/Inter-Regular.ttf'; // Укажите путь к файлу шрифта
import InterBold from '../../fonts/Inter-Bold.ttf'
import metro from '../../public/metro.png'
import map from '../../public/map.png'
import object from '../../public/5.jpg'
import specifications from '../../public/specifications.png'
import cardMap from '../../public/mapCard.jpg'
import propertyLogo from '../../public/property.png'

const images = [
    '../../public/object.jpg', '../../public/object2.jpg','../../public/object3.jpg','../../public/object4.jpg','../../public/object5.jpg','../../public/object6.jpg',
]

const arendators = [
    {
        logo: '../../public/logo.png',
        map: '995 120 ₽',
        gap: '11 941 440 ₽',
        srok: 'ДДА от\n' +
            '01.12.2023 на 10\n' +
            'лет',
        index: '3%',
        detail: '4 % от РТО, но не менее: В ДДА прописана ставка аренды на каждый год БЕЗУСЛОВНО: 1-й год - 497 560 руб/мес 2-й год – 995 120 руб/мес 3-й год – 1 024 974 руб/мес 4-й год – 1 055 723 руб/мес 5-й год – 1 087 394 руб/мес 6-й год – 1 120 016 руб/мес 7-й год – 1 153 617 руб/мес 8-й год – 1 188 225 руб/мес 9-й год – 1 223 872 руб/мес 10-й год – 1 260 588 руб/мес'
    },
    {
        logo: '../../public/logo.png',
        map: '995 120 ₽',
        gap: '11 941 440 ₽',
        srok: 'ДДА от\n' +
            '01.12.2023 на 10\n' +
            'лет',
        index: '3%',
        detail: '4 % от РТО, но не менее: В ДДА прописана ставка аренды на каждый год БЕЗУСЛОВНО: 1-й год - 497 560 руб/мес 2-й год – 995 120 руб/мес 3-й год – 1 024 974 руб/мес 4-й год – 1 055 723 руб/мес 5-й год – 1 087 394 руб/мес 6-й год – 1 120 016 руб/мес 7-й год – 1 153 617 руб/мес 8-й год – 1 188 225 руб/мес 9-й год – 1 223 872 руб/мес 10-й год – 1 260 588 руб/мес'
    },
]

const texnicalData = [
    {
        icon: '../../public/etazh.jpg',
        text: 'Этаж',
        value: '1'
    },
    {
        icon: '../../public/vhod.png',
        text: 'Количество входов',
        value: '5'
    },
    {
        icon: '../../public/ploshad.png',
        text: 'Площадь',
        value: '355,4 м²'
    },
    {
        icon: '../../public/potolok.png',
        text: 'Высота потолков',
        value: '3,77 м'
    },
    {
        icon: '../../public/set.png',
        text: 'Мощность',
        value: '3,77 м'
    },
    {
        icon: '../../public/plan.png',
        text: 'Планировка:',
        value: 'свободная'
    },
    {
        icon: '../../public/steklo.png',
        text: 'Остекление:',
        value: 'витринное'
    },
    {
        icon: '../../public/otdelka.png',
        text: 'Отделка:',
        value: 'Shell core'
    },
]

Font.register({family: 'Inter', src: InterRegular});
Font.register({family: 'InterBold', src: InterBold});
export default function TestPdf() {

    const title = () => {
        return (
            <View style={styles.titleObject}>
                <View style={{...styles.flexRow, ...styles.gap}}>
                    <Image style={{width: '38px', height: '38px'}} src={map}></Image>
                    <Text style={styles.text}>г Москва, ул 14-я Парковая, д 8</Text>
                </View>
                <View style={styles.flexRow}>
                    <Image style={{width: '38px', height: '38px'}} src={metro}></Image>
                    <Text style={styles.text}>м. Первомайская</Text>
                </View>
            </View>
        )
    }
    const footer = () => {
        return (
            <View style={{
                position: 'absolute',
                maxWidth: '2080px',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                margin: '0 auto',
                left: '200px',
                right: 0,
                bottom: '100px'
            }}>
                <Image style={{width: '533px', height: '156px', objectFit: 'contain'}} src={propertyLogo}></Image>
                <View style={{width: '100%', flexDirection: "column", display: "flex", justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <Link style={{textDecoration: 'none', color: 'black', fontSize: '40px'}} href={'tel:+7 495 792 84 98'}>
                        +7 495 792 84 98
                    </Link>
                    <Link style={{textDecoration: 'none', color: 'black', fontSize: '40px'}} href={'mailto:info@propertyplus.ru'}>
                        info@propertyplus.ru
                    </Link>
                    <Text style={{fontSize: '40px', fontFamily: 'Inter'}}>г. Москва, ул Усачева 2, стр. 3</Text>
                </View>
            </View>
        )
    }

    const styles = StyleSheet.create({
        page: {
            position: 'relative',
            paddingTop: '140px',
            flexDirection: 'column',
            backgroundColor: 'white',
            paddingHorizontal: '200px',
        },
        section: {
            display: "flex",
            width: '100%',
        },
        text: {
            fontFamily: 'Inter',
            display: "flex",
        },
        titleObject: {
            fontSize: '38px',
            paddingVertical: '34px',
            gap: '31px',
            alignItems: 'center',
            display: "flex",
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            backgroundColor: '#DDEEE4'
        },
        flexRow: {
            display: "flex",
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        gap: {
            gap: '14px',
        },
        imagePreview: {
            objectFit: 'cover',
            width: '1020px',
            height: '777px',
        },
        pt120: {
            fontFamily: 'Inter',
            paddingTop: '120px',
            display: "flex",

        },
        textSale: {
            textAlign: 'center',
            fontSize: '48px',
            color: '#144728',
            backgroundColor: '#DDEEE4',
            marginTop: '40px',
            paddingVertical: '10px'
        },
        text64: {
            width: '100%',
            fontFamily: 'InterBold',
            fontWeight: "bold",
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            textAlign: "center",
            fontSize: '60px',
            color: '#144728'
        },
        titleBlack: {
            fontFamily: 'InterBold',
            fontSize: '48px',
            fontWeight: 'bold',
        }

    });
    return (
        <div className={'pt-[150px]'}>
            <PDFViewer className={'h-screen w-full'}>
                <Document>
                    <Page size={{width: 2480, height: 3508,}} style={styles.page}>
                        {title()}
                        <View style={{...styles.pt120, display: "flex", flexDirection: 'row', gap: '40px'}}>
                            <View style={{maxWidth: '1020px'}}>
                                <Image style={styles.imagePreview} src={object}></Image>
                                <Text style={{
                                    ...styles.textSale,
                                    width: '100%',
                                    textAlign: "center",
                                    display: 'flex',
                                    alignItems: "center",
                                    justifyContent: 'center'
                                }}>Продажа торговой площади</Text>
                                <Text style={{paddingTop: '40px', fontSize: '40px'}}>
                                    Торговое помещение c сетевыми арендаторами: супермаркет "Пятерочка" и аптека “Шах”.
                                    Зальная планировка, первая линия, отдельная входная группа с фасада ОСЗ,
                                    оборудованная зона загрузки. Объект расположен на пересечении улиц 14-я Парковая и
                                    Нижняя Первомайская. Рядом оживленный пешеходный переход. Хорошие рекламные
                                    возможности. Парковка перед фасадом. В шаговой доступности школа, банк, аптека и
                                    колледж. Плотный жилой массив.
                                </Text>
                            </View>
                            <View style={{maxWidth: '1020px'}}>
                                {/*блок площадь цена цена за м2*/}
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                }}>
                                    <View style={{
                                        width: '100%',
                                        display: "flex",
                                        justifyContent: 'flex-start',
                                        alignItems: 'flex-start'
                                    }}>
                                        <Text style={{fontSize: '40px'}}>Площадь:</Text>
                                        <Text style={{
                                            fontSize: '48px',
                                            fontWeight: 'bold',
                                            fontFamily: 'InterBold',
                                            display: 'flex',
                                            gap: '8px'
                                        }}>
                                            575.6
                                            <Text style={{color: '#144728', fontSize: '40px'}}>м²</Text>
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '100%',
                                        display: "flex",
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{fontSize: '40px'}}>Цена:</Text>
                                        <Text style={{
                                            fontSize: '48px',
                                            fontWeight: 'bold',
                                            fontFamily: 'InterBold',
                                            display: 'flex',
                                            gap: '8px'
                                        }}>
                                            110 000 000
                                            <Text style={{color: '#144728', fontSize: '40px'}}>₽</Text>
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '100%',
                                        display: "flex",
                                        justifyContent: 'flex-end',
                                        alignItems: 'flex-end'
                                    }}>
                                        <Text style={{fontSize: '40px'}}>Цена за м²:</Text>
                                        <Text style={{
                                            fontSize: '48px',
                                            fontWeight: 'bold',
                                            fontFamily: 'InterBold',
                                            display: 'flex',
                                            gap: '8px'
                                        }}>
                                            309 510
                                            <Text style={{color: '#144728', fontSize: '40px'}}>₽</Text>
                                        </Text>
                                    </View>
                                    {/*блок площадь цена цена за м2*/}
                                </View>
                                {/*блок зеленый*/}
                                <View style={{
                                    marginTop: '40px',
                                    paddingVertical: '30px',
                                    backgroundColor: '#DDEEE4',
                                    width: '100%',
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between"
                                }}>
                                    <Text style={styles.text64}>
                                        Габ
                                    </Text>
                                    <Text style={styles.text64}>
                                        “ДИКСИ”
                                    </Text>
                                    <Text style={styles.text64}>
                                        9.2 лет
                                    </Text>
                                </View>
                                {/*блок зеленый*/}
                                {/*Коммерческие условия*/}
                                <View style={{marginTop: '40px',}}>
                                    <Text style={styles.titleBlack}>
                                        Коммерческие условия
                                    </Text>
                                    <View style={{border: '3px solid #DDEEE4', marginTop: '20px'}}>
                                        <View style={{
                                            display: "flex",
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                            padding: '20px',
                                            borderBottom: '2px solid #DDEEE4'
                                        }}>
                                            <View style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: '6.5px',
                                                alignItems: 'center'
                                            }}>
                                                <Image style={{width: '40px', height: '40px'}}
                                                       src={specifications}></Image>
                                                <Text style={{fontSize: '44px', color: '#144728'}}>
                                                    МАП:
                                                </Text>
                                            </View>
                                            <Text style={{fontSize: '44px'}}>
                                                995 120 руб.
                                            </Text>
                                        </View>
                                        <View style={{
                                            display: "flex",
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                            padding: '20px',
                                            borderBottom: '2px solid #DDEEE4'
                                        }}>
                                            <View style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: '6.5px',
                                                alignItems: 'center'
                                            }}>
                                                <Image style={{width: '40px', height: '40px'}}
                                                       src={specifications}></Image>
                                                <Text style={{fontSize: '44px', color: '#144728'}}>
                                                    ГАП:
                                                </Text>
                                            </View>
                                            <Text style={{fontSize: '44px'}}>
                                                11 941 440 руб.
                                            </Text>
                                        </View>
                                        <View style={{
                                            display: "flex",
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                            padding: '20px'
                                        }}>
                                            <View style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: '6.5px',
                                                alignItems: 'center'
                                            }}>
                                                <Image style={{width: '40px', height: '40px'}}
                                                       src={specifications}></Image>
                                                <Text style={{fontSize: '44px', color: '#144728'}}>
                                                    Окупаемость:
                                                </Text>
                                            </View>
                                            <Text style={{fontSize: '44px'}}>
                                                9.2 лет/11%
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                {/*Коммерческие условия*/}
                                {/*Технические хар-ки*/}
                                <View style={{marginTop: '40px',}}>
                                    <Text style={styles.titleBlack}>
                                        Технические характеристики
                                    </Text>
                                    <View style={{border: '3px solid #DDEEE4', marginTop: '20px'}}>
                                        {texnicalData.map((item, index) => {
                                            return (
                                                <View style={{
                                                    display: "flex",
                                                    justifyContent: 'space-between',
                                                    flexDirection: 'row',
                                                    padding: '20px',
                                                    borderBottom: '2px solid #DDEEE4'
                                                }}>
                                                    <View style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        gap: '6.5px',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Image style={{width: '40px', height: '40px'}}
                                                               src={item.icon}></Image>
                                                        <Text style={{fontSize: '44px', color: 'black'}}>
                                                            {item.text}
                                                        </Text>
                                                    </View>
                                                    <Text style={{fontSize: '42px'}}>
                                                        {item.value}
                                                    </Text>
                                                </View>
                                            )
                                        })}
                                    </View>
                                </View>
                                {/*Технические хар-ки*/}
                            </View>

                        </View>
                        {/*Карта*/}
                        <Link target={"_blank"} href={'https://yandex.ru/maps/-/CDFUvDNZ'}>
                            <Image style={{paddingTop: '50px'}} src={cardMap}></Image>
                        </Link>
                        {/*Карта*/}
                        {footer()}
                    </Page>
                    <Page size={{width: 2480, height: 3508}} style={styles.page}>
                        {title()}
                        <View style={{paddingTop: '200px'}}>
                            <View style={{
                                flexDirection: "row",
                                display: 'flex',
                                width: '100%',
                                border: '2px solid #9E9E9E',
                                backgroundColor: '#EAEAEA'
                            }}>
                                <View style={{
                                    width: '40%',
                                    paddingTop: '30px',
                                    paddingBottom: '30px',
                                    height: '100%',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRight: '1px solid #9E9E9E'
                                }}>
                                    <Text style={{
                                        fontSize: '36px',
                                        fontWeight: 'bold',
                                        fontFamily: 'InterBold',
                                        width: '100%',
                                        textAlign: "center"
                                    }}>
                                        Арендатор
                                    </Text>
                                </View>
                                <View style={{
                                    width: '40%',
                                    height: '100%',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRight: '1px solid #9E9E9E'
                                }}>
                                    <Text style={{
                                        fontSize: '36px',
                                        fontFamily: 'Inter',
                                        width: '100%',
                                        textAlign: "center"
                                    }}>
                                        МАП
                                    </Text>
                                </View>
                                <View style={{
                                    width: '40%',
                                    height: '100%',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRight: '1px solid #9E9E9E'
                                }}>
                                    <Text style={{
                                        fontSize: '36px',
                                        fontFamily: 'Inter',
                                        width: '100%',
                                        textAlign: "center"
                                    }}>
                                        ГАП
                                    </Text>
                                </View>
                                <View style={{
                                    width: '50%',
                                    height: '100%',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRight: '1px solid #9E9E9E'
                                }}>
                                    <Text style={{
                                        fontSize: '36px',
                                        fontFamily: 'Inter',
                                        width: '100%',
                                        textAlign: "center"
                                    }}>
                                        Срок договора
                                    </Text>
                                </View>
                                <View style={{
                                    width: '50%',
                                    height: '100%',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRight: '1px solid #9E9E9E'
                                }}>
                                    <Text style={{
                                        fontSize: '36px',
                                        fontFamily: 'Inter',
                                        width: '100%',
                                        textAlign: "center"
                                    }}>
                                        Индексация
                                    </Text>
                                </View>
                                <View style={{
                                    width: '100%',
                                    height: '100%',
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        fontSize: '36px',
                                        fontFamily: 'Inter',
                                        width: '100%',
                                        textAlign: "center",
                                    }}>
                                        Детализация арендного потока
                                    </Text>
                                </View>
                            </View>
                            {arendators.map(item => {
                                return <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    borderBottom: '2px solid #9E9E9E',
                                    borderLeft: '2px solid #9E9E9E'
                                }}>
                                    <View style={{
                                        width: '40%',
                                        padding: '20px',
                                        height: '100%',
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        borderRight: '1px solid #9E9E9E'
                                    }}>
                                        <Image style={{width: '150px', height: '150px'}} src={item.logo}></Image>
                                    </View>
                                    <View style={{
                                        width: '40%',
                                        padding: '20px',
                                        height: '100%',
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        borderRight: '1px solid #9E9E9E'
                                    }}>
                                        <Text style={{fontSize: '36px', fontFamily: 'Inter', color: 'black'}}>
                                            {item.map}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '40%',
                                        padding: '20px',
                                        height: '100%',
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        borderRight: '1px solid #9E9E9E'
                                    }}>
                                        <Text style={{fontSize: '36px', fontFamily: 'Inter', color: 'black'}}>
                                            {item.gap}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '50%',
                                        padding: '20px',
                                        height: '100%',
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        borderRight: '1px solid #9E9E9E'
                                    }}>
                                        <Text style={{fontSize: '36px', fontFamily: 'Inter', color: 'black'}}>
                                            {item.srok}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '50%',
                                        padding: '20px',
                                        height: '100%',
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        borderRight: '1px solid #9E9E9E'
                                    }}>
                                        <Text style={{fontSize: '36px', fontFamily: 'Inter', color: 'black'}}>
                                            {item.index}
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '100%',
                                        padding: '20px',
                                        height: '100%',
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        borderRight: '1px solid #9E9E9E'
                                    }}>
                                        <Text style={{fontSize: '36px', fontFamily: 'Inter', color: 'black'}}>
                                            {item.detail}
                                        </Text>
                                    </View>
                                </View>
                            })}
                            <Image style={{maxHeight: '1200px', objectFit: 'contain', paddingTop: '200px'}}
                                   src={'../../public/planing.jpg'}></Image>
                        </View>
                        {footer()}
                    </Page>
                    <Page size={{width: 2480, height: 3508}} style={styles.page}>
                        {title()}
                        <View style={{display: "flex", flexDirection: 'row', flexWrap: 'wrap', gap: '60px', paddingTop: '150px'}}>
                            {images.map(item => {
                                return (
                                    <Image style={{maxWidth: '1010px', objectFit: 'contain'}} src={item}>

                                    </Image>
                                )
                            })}
                        </View>
                        {footer()}
                    </Page>
                </Document>
            </PDFViewer>
        </div>

    )
}