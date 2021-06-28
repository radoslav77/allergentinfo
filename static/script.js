
const res = document.querySelector('.recipe')
const Cont  = document.querySelector('.contain')
const i = res.innerText.split('\n')

const allergents = {
    dairy : ['Milk','Butter', 'Cream','Yogurt','Cheese'],
    gluten : ['Flour', 'Oats', 'Barley'],
    nuts : ['Almonds','Almond','Walnuts','Walnut', 'Pecans','Pecan','Cashews','Cashew','Pistachios','Pistachio','Hazelnuts','Hazelnut',
            'Brazil','Brazils','Macadamia','Macadamias','Chestnut','Chestnuts','Filbert','Filberts','Hickory','Hickories','Pinenuts','Pinenut','Pine','Coconut','Coconuts'],
    eggs : ['Egg','Eggs', 'Yolks', 'Yolk', 'Whites', 'Egg white'],
    peanut: ['Peanut', 'Peanuts','Peanutbutter'],
    celery: ['Celery'],
    crustaceans : ['Prawns','Prawn','Crabs','Crab', 'Lobster','Lobsters'],
    fish : ['Fish'],
    lupin : ['Lupin'],
    molluscs : ['Mussels','Mussel','Oysters','Oyster'],
    mustard : ['Mustard', 'Mustards'],
    sesame : ['Sesame', 'Sesames'],
    soy : ['Soybean','Soybeans','Soyabean','Soyabeans','Soy','Soya','Chocolate','Chocolates'],
    sulphites : ['Cheese','Glucose','Glaze','Gel', 'Dry']


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
                                
                const p = document.getElementById('1')
                p.hidden = false
                p.innerText = 'Peanuts,'
                
            }
        })

        eggs.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const e = document.getElementById('2')
                e.hidden = false
                e.innerText = 'Eggs,'
               
                
            }
        })

        glutens.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const g = document.getElementById('3')
                g.hidden = false
                g.innerText = 'Gluten,'
             
                
            }
        })

        dairies.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const d = document.getElementById('4')                
                d.hidden = false
                d.innerText = 'Dairy,'
                
                
            }
        })

        nuts.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const n = document.getElementById('5')
                n.hidden = false
                n.innerText = 'Nuts,'
               
                
            }
        })

        celery.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const c = document.getElementById('6')
                c.hidden = false
                c.innerText = 'Celery,'
               
                
            }
        })

        crustaceans.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const cru = document.getElementById('7')
                cru.hidden = false
                cru.innerText = 'Crustaceans,'
             
                
            }
        })

        fish.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const f = document.getElementById('8')
                f.hidden = false
                f.innerText = 'Fish,'
               
                
            }
        })

        lupin.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const l = document.getElementById('9')
                l.hidden = false
                l.innerText = 'Lupin,'
              
                
            }
        })

        molluscs.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const m = document.getElementById('10')
                m.hidden = false
                m.innerText = 'Molluscs,'
                
                
            }
        })

        mustard.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const mus = document.getElementById('11')
                mus.hidden = false
                mus.innerText = 'Mustard,'
               
                
            }
        })

        sesame.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const ses = document.getElementById('12')
                ses.hidden = false
                ses.innerText = 'Sesame,'
               
                
            }
        })

        soya.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())               
            if ( found == all || found == all.toLowerCase()){
                
                const so = document.getElementById('13')
                so.hidden = false
                so.innerText = 'Soya,'
                
                
            }
        })

        sulphites.forEach(all => {
            const found = num.find(element => element.toLowerCase() == all.toLowerCase())   
            if ( found == all || found == all.toLowerCase()){
                
                const sul = document.getElementById('14')
                sul.hidden = false
                sul.innerText = 'Sulphites,'
              
                
            }
        })

    })
}
