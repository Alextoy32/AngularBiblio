export class Livre {
    public numero:number
    private titre:string
    public pages:[string]

    constructor(numero:number, titre:string, pages:[string]) {
        this.numero = numero
        this.titre = titre
        this.pages = pages
    }

    public getNum():number {
        return this.numero
    }
    setNum(numero:number) {
        this.numero = numero
    }

    getTitre():string {
        return this.titre
    }
    setTitre(titre:string) {
        this.titre = titre
    }

    getPages():[string] {
        return this.pages
    }
    setPages(pages:[string]) {
        this.pages = pages
    }
}