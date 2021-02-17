const loremText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis labore illum doloremque quae nostrum illo aut suscipit. Sunt atque aspernatur soluta natus impedit sapiente ipsam quaerat dolorum debitis, tempore dolorem.';
const sections = [
    { type: 'title', value: 'Hello World!' },
    { type: 'text', value: loremText },
    { type: 'columns', value: [loremText, loremText, loremText] }
];

const $content = document.querySelector('#cv');

section.forEach(section => {
    let html = '';
    if (section.type === 'title') {
        let html = `
 <section class="row">
                <div class="col-sm">
                    <h2>${section.value}</h2>
                </div>
            </section>
 `
    }
    esle
    if (section.type === 'text') {

        esle
        if (section.type === 'columns')
    }
    $content.insertAdjacentHTML('beforeens', html)
})

function title(section) {
    return `
    <section class="row">
                   <div class="col-sm">
                       <h2>${section.value}</h2>
                   </div>
               </section>
    `
}

function text(section) {
    return
}