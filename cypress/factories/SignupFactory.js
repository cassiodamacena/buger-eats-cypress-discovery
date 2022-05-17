var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '12123456789',
            address: {
                postalcode: '12606470',
                street: 'Rua Santa Rita de Cássia',
                number: '86',
                details: 'Sobrado branco',
                district: 'Cruz',
                city_state: 'Lorena/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        /*
                var data = {
                    name: 'Cassio Damacena',
                    cpf: '00000014141',
                    email: 'cassio@email.com',
                    whatsapp: '12123456789',
                    address: {
                        postalcode: '12606470',
                        street: 'Rua Santa Rita de Cássia',
                        number: '86',
                        details: 'Sobrado branco',
                        district: 'Cruz',
                        city_state: 'Lorena/SP'
                    },
                    delivery_method: 'Moto',
                    cnh: 'cnh-digital.jpg'
                }
        */
        return data

    }

}