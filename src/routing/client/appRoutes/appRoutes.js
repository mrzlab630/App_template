import {
        ErrorPage,
            Home,
        } from '../../../views';

/**
 *  HOW TO USE
 * @type {{login: {redirect: string, path: string, component: *, private: boolean, exact: boolean, iflogin: boolean}, error: {path: string, component: *, private: boolean, exact: boolean}, dashboard: {redirect: string, path: string, component: *, private: boolean, exact: boolean}, home: {path: string, component: *, private: boolean, exact: boolean}}}
 *
 * 1. импортировать компонент страницы
 * 2. добавить объект в appRoutes
 * 2.1. ключ -- название страницы
 * 2.2. path -- путь страницы
 * 2.3. component -- компонент отвечающий за рендеринг
 * 2.4. exact -- точное соответствие
 * 2.5. strict -- параметр роутинга, задает строгое совпадение
 * 2.6. private -- компонент доступен только после авторизации
 * 2.7. iflogin -- если пользовать автаризован что-то сделать
 * 2.8. redirect -- путь переадрисации используется в связки с private или iflogin
 *
 *
 * очередность путей важно!
 *
 */



const appRoutes = {
    home:{
        path:'/',
        component:Home,
        exact: true,
        private:false,
    },
    error:{
        path:'/Error404',
        component:ErrorPage,
        exact: true,
        private:false,
    },
};

export default appRoutes;