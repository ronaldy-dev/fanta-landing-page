// Criação de uma timeline do GSAP com animações sicronizadas com o scroll 
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub:true,
        markers: true, //DEPURAÇÃO
    },
});


tl.to(
    '#fanta',
    {
        top: '120%', //MOVE O ELEMENTO COM ID FANTAPARA 120% DO TOPO
        left:'0%', 
    },
    'orange'
); //Nomeando este trecho de animação como 'orange' para sicronização

tl.to(
    '#laranja-cortada',
    {
        top:'160%',
        left: '23%',
    },
    'orange'
); // sicronizado com a animação nomeada 'orange'

tl.to(
    '#laranja',
    {
        width: '15%', //reduz a largura do elemento com id 'orange' para 15%
        top: '160%', // move o elemento para 160%do topo
        rigth: '10%', //move o elemneto para 10% da direita
    },
    'orange'
); //sicronizando com a aanimação nomeada 'orange'

tl.to(
    '#folha',
    {
        top:'110%',
        rotate:'500deg',
        left: '70%',
    },
    'orange'
)
tl.to(
    '#folha2',
    {
        top:'110%',
        rotate:'500deg',
        left: '0%',
    },
    'orange'
);

//criando outra timeline

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',// fim da animação (topo da tela atinge 50% da altura quando estiver 20%da seção .three)
        scrub:true,
        markers: true, //DEPURAÇÃO
    },
});

// definindo a animação dos elementos com a timeline 'tl2'
tl2.from(
    '.lemo1',
    {
        rotate: '-90deg', // inicia o elemento com classe 'lemom1' rotacionando 
        left: '-100%', // inicia o elemento da tela, á esquerda (-100%)
        top:'110%', //inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
);

tl2.from(
    '#cocacola', 
    {
        rotate: '-90deg',
        top: '110%',
        left: '-100%',
    },
    'ca'
);

tl2.from(
    '.lemo2',
    {
        rotate: '90deg', // inicia o elemento com classe 'lemom1' rotacionando 90 graus
        left: '100%', // inicia o elemento da tela, á esquerda (100%)
        top:'110%', //inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg', // inicia o elemento com classe 'lemom1' rotacionando 
        left: '100%', // inicia o elemento da tela, á esquerda (100%)
        top:'110%', //inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);
tl2.to(
    '#fanta',
    {
        width: '35%',
        left: '33%',
        top: '210%',
    },
    'ca'
);
