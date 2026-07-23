// PRINCIPIOS SOLID

// 1.- Principio de Responsabilidad unica

interface IUser {
    name: string
    lastname: string
    age: number
    type?: string
}

class User {

    saveUser(user: IUser) {
        // logica para guardar usurio
        
        if(user.age < 18) {
            user.type = 'Menor de edad'
        }
    }

    // Esta clase solo debe ser responsable de las operaciones de usuarios

    sendEmail() {
        // logica para enviar correos
    }

    generatePDF() {
        // logica para que el usuario pueda generar reportes
    }

}

const userService = new User()
userService.saveUser({name: 'Jean', lastname: 'Zuñiga', age: 29})
// string | number | boolean | any | Array | Object | Function | callback 


// 2.- Principio Abierto/Cerrado

interface ITax {
    calculate(): number
}

class CalculateTaxBase implements ITax {
    calculate(): number {
        return 5
    }
}

class CalculateTaxHouse implements ITax {
    calculate(): number {
        return 15
    }
}

class CalculateTax {
    calculate( tax: ITax ): number {
        return tax.calculate()
    }
}

const calculateTaxService = new CalculateTax()
console.log(calculateTaxService.calculate(new CalculateTaxHouse))


// 3.- Liskov (Sustitución de Liskov)

interface IAve {
    type: string
}
interface IAveVoladora {
    fly(): void
}

class Aguila implements IAve, IAveVoladora {

    public type = 'Aguila'

    fly() {

    }

}

class Pinguino implements IAve {
    public type = 'Pingüino'
}

// 4.- Segregación de interfaz

interface IDoctor {
    curar(): void
}

interface IComer {
    comer(): void
}

interface IDormir {
    dormir(): void
}

class Humano implements IDoctor, IComer, IDormir {
    curar(): void {
        
    }

    comer(): void {
        
    }

    dormir(): void {
        
    }
}

class Maquina implements IDoctor {
    curar(): void {
        
    }
}

// 5.- Inversión de dependencia

interface IDatabase {
    guardar(): void
    consultar(): void
    actualizar(): void
}

class SqlDatabase implements IDatabase {
    guardar() {
        console.log('Guarda en SQL')
    }

    consultar() {
        // SELECT * FROM users WHERE user.id = id
    }

    actualizar() {

    }
}

class NoSqlDatabase implements IDatabase {
    guardar() {
        console.log('Guarda en SQL')
    }

    consultar() {
        // const user = await user.find(id: user.id)
    }

    actualizar() {

    }
}

class UserService {

    constructor(
        private db: IDatabase
    ) {}

    register() {
        this.db.guardar()

        // sendEmail
    }
}

const sqlService = new SqlDatabase()
const noSqlService = new NoSqlDatabase()

const user = new UserService(sqlService)


// Patrón Repository

// Servicios ----> Repositorios ----> Base de datos

// Arquitectura hexagonal

// API ---> service ---> repository ----> base de datos