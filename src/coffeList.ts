import ExpressoTradicional from './assets/Tradicional.png'
import ExpressoAmericano from './assets/Americano.png'
import ExpressoCremoso from './assets/ExpressoCremoso.png'
import ExpressoGelado from './assets/CafeGelado.png'
import CafeComLeite from './assets/CafeComLeite.png'
import Latte from './assets/Latte.png'
import Macchiato from './assets/Macchiato.png'
import Mocaccino from './assets/Mochaccino.png'
import ChocolateQuente from './assets/ChocolateQuente.png'
import Cubano from './assets/Cubano.png'
import Havaiano from './assets/Havaiano.png'

export const coffeeList = [
    {id: 1, name: 'Expresso Tradicional', valor: 9.90, img: ExpressoTradicional, tags:['TRADICIONAL'], description: 'O tradicional café feito com água quente e grãos moídos'},
    {id: 2, name: 'Expresso Americano', valor: 9.90, img: ExpressoAmericano, tags:['TRADICIONAL'], description: 'Expresso diluído, menos intenso que o tradicional'},
    {id: 3, name: 'Expresso Cremoso', valor: 9.90, img: ExpressoCremoso, tags:['TRADICIONAL'], description: 'Café expresso tradicional com espuma cremosa'},
    {id: 4, name: 'Expresso Gelado', valor: 9.90, img: ExpressoGelado, tags:['TRADICIONAL', 'GELADO'], description: 'Bebida preparada com café expresso e cubos de gelo'},
    {id: 5, name: 'Café com Leite', valor: 9.90, img: CafeComLeite, tags:['TRADICIONAL', 'COM LEITE'], description: 'Meio a meio de expresso tradicional com leite vaporizado'},
    {id: 6, name: 'Latte', valor: 9.90, img: Latte, tags:['TRADICIONAL', 'COM LEITE'], description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa'},
    {id: 7, name: 'Macchiato', valor: 9.90, img: Macchiato, tags:['TRADICIONAL', 'COM LEITE'], description: 'Café expresso misturado com um pouco de leite quente e espuma'},
    {id: 8, name: 'Mocaccino', valor: 9.90, img: Mocaccino, tags:['TRADICIONAL', 'COM LEITE'], description: 'Café expresso com calda de chocolate, pouco leite e espuma'},
    {id: 9, name: 'Chocolate Quente', valor: 9.90, img: ChocolateQuente, tags:['ESPECIAL', 'COM LEITE'], description: 'Bebida feita com chocolate dissolvido no leite quente e café'},
    {id: 10, name: 'Cubano', valor: 9.90, img: Cubano, tags:['ESPECIAL', 'ALCOÓLICO', 'GELADO'], description: 'Drink gelado de café expresso com rum, creme de leite e hortelã'},
    {id: 11, name: 'Havaiano', valor: 9.90, img: Havaiano, tags:['ESPECIAL'], description: 'Bebida adocicada preparada com café e leite de coco'},
]