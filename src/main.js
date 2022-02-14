import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import ContactPage from "./pages/contact";
import DashboardPage from "./pages/admin/dashboard";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

import AdminNewsPage from "./pages/admin/news";
import AdminNewsAddPage from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import DetailNewsPage from "./pages/detail";


const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

// router.on("/admin/*", () => {}, {
//     // Phương thức before được gọi trước khi render nội dung ra trình duyệt
//     before: (done) => {
//         if (localStorage.getItem('user')) {
//             // lấy id trong localStorage
//             const userId = JSON.parse(localStorage.getItem('user')).id;
//             // Nếu userid == 1 thì render
//             if (userId === 1) {
//                 done();
//             } else {
//                 // ngược lại nếu ko phải admin quay về trang chủ
//                 document.location.href = "/"
//             }
//         } else {
//             document.location.href = "/"
//         }

//     }
// })

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/product": () => print(ProductPage),
    "/contact": () => print(ContactPage),


    "/news/:id": (value) => print(DetailNewsPage, value.data.id),
    "/admin/dashboard": () => print(DashboardPage),
    "/admin/news": () => print(AdminNewsPage),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    "/admin/news/add": () => print(AdminNewsAddPage),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
});
router.resolve();

/**
 * ôn lại callback
 * ôn lại promise
 * Biết cách sử dụng async/await
 * API là gì? sử dụng API
 *                                                   /endpoint
 * Ví dụ: https://5e79b4b817314d00161333da.mockapi.io/user
 *      GET /user
 */

// sum(10,20, myFunction);
// const render = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         try {
//             resolve("Mảng chứa dữ liệu từ server");
//         } catch (error) {
//             reject("Lỗi kết nối");
//         }
//     }, 3000);
// });

// cach 1
// const printA = render();
// printA
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));

// cach 2
// const printB = async () => {
//     try {
//         document.querySelector("#app").innerHTML = await render();
//     } catch (error) {
//         console.log(error);
//     }
// };
// printB();