interface Database {
    get(id: string): string,
    set(id: string, val: string): void
}

class InMemoryDatabase implements Database {

    db: Record<string, string> = {}

    get(id: string): string{
        return this.db[id]
    }
    set(id: string, val: string){
        this.db[id] = val
    }
}

class Pizza {
    constructor(private name: string){
        this.name = name
    }
    
    get(){
        return this.name
    }
}