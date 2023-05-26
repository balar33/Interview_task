import { Grid } from "@mui/material";
import BrandLogo from "../../assets/images/your_logo_brand.svg"
import style from "./Header.module.css"

const Header = () => {
    return(
        <>
        <header className={style.pageHeader}>
            <Grid>
                <a href="/" className={style.brandLogo}>
                    <img src={ BrandLogo } alt="Your logo" />
                </a>
            </Grid>
        </header>
        </>
    )
}
export default Header;