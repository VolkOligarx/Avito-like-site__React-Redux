import s from "./ArticleContainer.module.scss";

export const ArticleContainer = () => {

    return (

        <div className={s.Main_Container}>
            <h3 className={s.Main_Title}>Описание товара</h3>
            <div className={s.Main_Content}>
                <p className={s.Main_Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>

    )
}

export default ArticleContainer