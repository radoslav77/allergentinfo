
const res = document.querySelector('.recipe')
const Cont  = document.querySelector('.contain')
const i = res.innerText.split('\n')

const allergents = {
    dairy : ['Milk','Butter', 'Cream','Yogurt','Cheese'],
    gluten : ['Flour', 'Oats', 'Barley'],
    nuts : ['Almonds','Almond','Walnuts','Walnut', 'Pecans','Pecan','Cashews','Cashew','Pistachios','Pistachio','Hazelnuts','Hazelnut',
            'Brazil','Brazils','Macadamia','Macadamias','Chestnut','Chestnuts','Filbert','Filberts','Hickory','Hickories','Pinenuts','Pinenut','Pine','Coconut','Coconuts'],
    eggs : ['Egg','Eggs', 'Yolks', 'Yolk', 'Whites', 'White'],
    peanut: ['Peanut', 'Peanuts','Peanutbutter'],
    celery: ['Celery'],
    crustaceans : ['Prawns','Prawn','Crabs','Crab', 'Lobster','Lobsters'],
    fish : ['Fish'],
    lupin : ['Lupin'],
    molluscs : ['Mussels','Mussel','Oysters','Oyster'],
    mustard : ['Mustard', 'Mustards'],
    sesame : ['Sesame', 'Sesames'],
    soy : ['Soybean','Soybeans','Soyabean','Soyabeans','Soy','Soya','Chocolate','Chocolates'],
    sulphites : ['Cheese','Glucose','Glaze','Gel']


}



ContainAllergents()


function ContainAllergents() {
    i.forEach(e => {
        var num = e.split(/\s+/)
        var dairies = allergents.dairy
        var glutens = allergents.gluten
        var nuts = allergents.nuts
        var eggs = allergents.eggs
        var peanuts = allergents.peanut
        var celery = allergents.celery
        var crustaceans = allergents.crustaceans
        var fish =  allergents.fish
        var lupin = allergents.lupin
        var molluscs = allergents.molluscs
        var mustard = allergents.mustard
        var sesame = allergents.sesame
        var soya = allergents.soy
        var sulphites = allergents.sulphites

        peanuts.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if (found == all || found == all.toLowerCase()){
                                
                const pEl = document.createElement('p')
                pEl.innerText = 'Peanuts,'
                Cont.appendChild(pEl)
            }
        })

        eggs.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Eggs,'
                Cont.appendChild(pEl)
                
            }
        })

        glutens.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Gluten,'
                Cont.appendChild(pEl)
                
            }
        })

        dairies.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Dairy,'
                Cont.appendChild(pEl)
                
            }
        })

        nuts.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Nuts,'
                Cont.appendChild(pEl)
                
            }
        })

        celery.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Celery,'
                Cont.appendChild(pEl)
                
            }
        })

        crustaceans.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Crustaceans,'
                Cont.appendChild(pEl)
                
            }
        })

        fish.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Fish,'
                Cont.appendChild(pEl)
                
            }
        })

        lupin.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Lupin,'
                Cont.appendChild(pEl)
                
            }
        })

        molluscs.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Molluscs,'
                Cont.appendChild(pEl)
                
            }
        })

        mustard.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Mustard,'
                Cont.appendChild(pEl)
                
            }
        })

        sesame.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Sesame,'
                Cont.appendChild(pEl)
                
            }
        })

        soya.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())               
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Soya,'
                Cont.appendChild(pEl)
                
            }
        })

        sulphites.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const pEl = document.createElement('p')
                pEl.innerText = 'Sulphites,'
                Cont.appendChild(pEl)
                
            }
        })

    })
}
