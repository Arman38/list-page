import React from 'react'
import {Container,Navbar,NavDropdown} from 'react-bootstrap'
import './categories.css'

const Categories = ({showCategories}) => {

    const classes = showCategories ?"text-small justify-content-center nav-bar" : "text-small justify-content-center nav-bar categories"
    return (
        <Container>
            <Navbar expand="lg" className={classes}>
                <NavDropdown title="Բոլոր բաժինները" id="basic-nav-dropdown"  >
                    <NavDropdown.Item href="#action/3.2">Անշարժ գույք </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Տրանսպորտ</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Էլեկտրոնիկա</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Կենցաղային տեխնիկա</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Ամեն ինչ տան համար</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Նորաձևություն եւ ոճ</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Մանկական աշխարհ</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Մշակույթ և հոբբի</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Գործիքներ և նյութեր</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Կենդանիներ և բույսեր</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Մթերք և ըմպելիքներ</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Այլ</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">Ծառայություններ</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Աշխատանք</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Անշարժ գույք" id="basic-nav-dropdown">
                    <div className = "item-container">
                        <NavDropdown.Header href="#action/3.1">Վաճառք</NavDropdown.Header>
                            <NavDropdown.Item href="#action/3.1">Բնակարաններ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Տներ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Հողատարածք</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ավտոտնակներ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Այլ</NavDropdown.Item>
                        <NavDropdown.Header  href="#action/3.1">Վարձակալություն</NavDropdown.Header>
                            <NavDropdown.Item href="#action/3.1">Բնակարաններ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Տներ</NavDropdown.Item>   
                            <NavDropdown.Item href="#action/3.2">Գրասենյակային և այլ տարածքներ</NavDropdown.Item>   
                            <NavDropdown.Item href="#action/3.2">Ավտոտնակներ</NavDropdown.Item>   
                            <NavDropdown.Item href="#action/3.2">Այլ</NavDropdown.Item>  
                    </div> 
                </NavDropdown>
                <NavDropdown title="Տրանսպորտ" id="basic-nav-dropdown">
                        <div className = "item-container d-flex ">
                            <div>
                    <NavDropdown.Header href="#action/3.1">Ավտոմեքենաներ</NavDropdown.Header>
                        <NavDropdown.Item href="#action/3.1">Ավտոմեքենաներ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Ավտոմեքենաներ արտերկրից</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Վթարված մեքենաներ որպես պահեստամաս</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Պահեստամասեր</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Անիվներ և անվադողեր</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Աուդիոտեխնիկա</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Ավտոէլեկտրոնիկա</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Աքսեսուարներ</NavDropdown.Item>
                    <NavDropdown.Header href="#action/3.1">Մոտոցիկլներ</NavDropdown.Header>
                        <NavDropdown.Item href="#action/3.3">Մոտոցիկլներ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Պահեստամասեր և աքսեսուարներ</NavDropdown.Item>
                    <NavDropdown.Header href="#action/3.1">Հեծանիվներ</NavDropdown.Header>
                        <NavDropdown.Item href="#action/3.3">Հեծանիվներ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Պահեստամասեր և աքսեսուարներ</NavDropdown.Item>
                            </div>
                            <div className ="border-left border-light">
                    <NavDropdown.Header href="#action/3.1">Կոմերցիոն տրանսպորտ</NavDropdown.Header>
                        <NavDropdown.Item href="#action/3.1">Բեռնատարներ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Ավտոբուսներ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Գյուղատնտեսական տեխնիկա</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Շինարարական և ծանր տեխնիկա</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Պահեստամասեր և աքսեսուարներ</NavDropdown.Item>
                    <NavDropdown.Header href="#action/3.1">Այլ տրանսպորտ</NavDropdown.Header>
                        <NavDropdown.Item href="#action/3.3">Սկուտերներ և մոպեդներ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Կվադրոցիկլներ և ձյունագնացներ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Ավտոտնակներ և կցանքներ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Ջրային տրանսպորտ</NavDropdown.Item>
                    <NavDropdown.Divider></NavDropdown.Divider>
                                <NavDropdown.Item href="#action/3.3">Այլ</NavDropdown.Item>
                            </div>
                        </div>
                </NavDropdown>
                <NavDropdown title="Էլեկտրոնիկա" id="basic-nav-dropdown">
                <div className = " item-container d-flex">
                        <div>
                            <NavDropdown.Header href="#action/3.1">Հեռախոսներ և կապ</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.1">Հեռախոսներ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Աքսեսուարներ և պահեստամասեր</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Համարներ եւ ՍԻՄ-քարտեր</NavDropdown.Item>
                            <NavDropdown.Header href="#action/3.1">Համակարգիչներ</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.3">Նոութբուքեր</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Պլանշետներ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Համակարգիչներ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Պերիֆերիկ սարքեր</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Սարքավորումներ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Աքսեսուարներ</NavDropdown.Item>
                            <NavDropdown.Header href="#action/3.1">Խաղեր և խաղային համակարգեր</NavDropdown.Header>
                                    <NavDropdown.Item href="#action/3.3">Համակարգչային խաղեր</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Խաղային համակարգեր</NavDropdown.Item>
                        </div>
                        <div className ="border-left border-light">
                            <NavDropdown.Header href="#action/3.1">TV և վիդեո</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.1">Հեռուստացույցներ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Մեդիա նվագարկիչներ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Արբանյակային TV</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Ֆոտո և վիդեոտեխնիկա</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Ֆոտոխցիկներ</NavDropdown.Item>
                            <NavDropdown.Header href="#action/3.1">Տեսախցիկներ</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.3">Աքսեսուարներ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Աուդիոտեխնիկա</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Բարձրախոսներ և ուժեղացուցիչներ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Նվագարկիչներ և երաժշտական կենտրոններ</NavDropdown.Item>
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item href="#action/3.3">Այլ</NavDropdown.Item>
                        </div>
                    </div>
            </NavDropdown>
            <NavDropdown title="Ծառայություններ" id="basic-nav-dropdown">
                    <div className ="d-flex item-container ">
                    <div>
                            <NavDropdown.Header href="#action/3.1"> Շինարարություն և վերանորոգում</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.3">Պատվերով կահույք</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Վերանորոգում և ներքին հարդարանք</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Շինարարություն</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Սանտեխնիկա</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Էլեկտրականություն</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Դռներ և պատուհաններ</NavDropdown.Item>
                            <NavDropdown.Header href="#action/3.1">Տրանսպորտ</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.3">Փոխադրումներ և տաքսի</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Ավտոմեքենաների վարձույթ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Ավտոսպասարկում</NavDropdown.Item>
                            <NavDropdown.Header href="#action/3.1">Էլեկտրոնիկա</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.3">Համակարգիչներ և ինտերնետ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Հեռախոսներ և էլեկտրոնիկա</NavDropdown.Item>
                        </div>
                        <div className ="border-left border-light">
                            <NavDropdown.Header href="#action/3.1"> Կրթություն</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.3">Օտար լեզուներ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Մասնավոր պարապմունքներ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Դասընթացներ և սեմինարներ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Այլ</NavDropdown.Item>
                            <NavDropdown.Header href="#action/3.1"> Բիզնես ծառայություններ</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.3">Ֆինանսներ և հաշվապահություն</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Իրավաբանական ծառայություններ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Թարգմանություններ և տեքստեր</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Այլ</NavDropdown.Item>
                            <NavDropdown.Header href="#action/3.1"> Կենցաղային ծառայություններ</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.3">Կենցաղային տեխնիկայի վերանորոգում</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Մաքրման ծառայություններ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Երեխաների խնամք</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Այլ</NavDropdown.Item>
                        </div>
                        <div className ="border-left border-light">
                            <NavDropdown.Header href="#action/3.1">Գեղեցկություն և առողջություն</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.3">Կոսմետոլոգիա և դիմահարդարում</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Մանիկյուր և պեդիկյուր</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Վարսավիրական ծառայություններ</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Մազահեռացում</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Բժշկություն</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Այլ</NavDropdown.Item>
                            <NavDropdown.Header href="#action/3.1"> Միջոցառումներ և տոներ</NavDropdown.Header>
                                <NavDropdown.Item href="#action/3.3">Ամեն ինչ Ամանորի համար</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Ռեստորաններ և խոհանոց</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Կազմակերպում և անցկացում</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Այլ</NavDropdown.Item>
                            <NavDropdown.Header href="#action/3.1">Զբոսաշրջություն և ճանապարհորդություն</NavDropdown.Header>
                            <NavDropdown.Header href="#action/3.1"> Մեդիա և դիզայն</NavDropdown.Header>
                            <NavDropdown.Header href="#action/3.1">Այլ</NavDropdown.Header>
                        </div>
                    </div>
                </NavDropdown>
                <NavDropdown title="Աշխատանք" id="basic-nav-dropdown">
                    <div className = "item-container d-flex ">
                        <div>
                            <NavDropdown.Item href="#action/3.1">Գրասենյակային աշխատանք</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Առևտուր</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ֆինանսներ և իրավունք</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Համակարգիչներ և ինտերնետ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Մեդիա և դիզայն</NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item href="#action/3.1">Ռեստորաններ և խոհանոց</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Զբոսաշրջություն և հյուրանոցներ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Տրանսպորտ և տաքսի</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Գեղեցկության և սպա սրահներ</NavDropdown.Item>
                        </div>
                        <div className = "border-left border-light">
                            <NavDropdown.Item href="#action/3.3"> Շինարարություն և ճարտարապետություն</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Տնային տնտեսություն</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Արտադրության և արհեստ</NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item href="#action/3.3">Գործարարություն և մարքեթինգ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Կրթություն</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Բժշկություն և առողջություն</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Այլ</NavDropdown.Item>
                        <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item href="#action/3.3">Փնտրում եմ աշխատանք</NavDropdown.Item>
                        </div>
                    </div>
                </NavDropdown>
                <NavDropdown title="Նորաձևություն եւ ոճ" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Ամեն ինչ տան համար" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
        </Container>
    )
}

export default Categories