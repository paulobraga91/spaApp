import { Router } from "./router.js"

const router = new Router()

router.add('/', "/src/home.html")
router.add("/universo", "/src/universo.html")
router.add("/exploracao", "/src/exploracao.html")
router.add(404, "/src/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()