export class Router{

    routes = {}

    add(routerName, page){
        this.routes[routerName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()
        window.history.pushState({},"",event.target.href)
        this.handle()
    }
    
    handle(){
        const{ pathname} = window.location
        const route = this.routes[pathname] || this.routes["/"]
        const activedLink = document.querySelector(`nav a[href="${pathname}"]`)
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('pageSelected'))
        
        switch (pathname) {
            case '/universo': 
                document.body.style.backgroundImage = "url('./imgs/mountains-universe02.png')"; 
                break;
            case '/exploracao':
                document.body.style.backgroundImage = "url('./imgs/mountains-universe-3.png')"; 
                break;
            default:
                document.body.style.backgroundImage = "url('./imgs/mountains-universe-1.png')"; 
                break;
        }

        console.log(pathname)
        if(activedLink) activedLink.classList.add('pageSelected')
       
        fetch(route)
        .then(data=> data.text())
        .then(html =>{
            document.querySelector('.app').innerHTML = html
        } )
       
    }
}