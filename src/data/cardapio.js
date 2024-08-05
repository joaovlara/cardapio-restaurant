const cardapio = {
    lamens: {
        id: 1,
        items: [
            {
                id: 101,
                nome: "Shoyu Lamen",
                descricao: "Caldo à base de molho de soja, macarrão, fatias de chashu (carne de porco), ovo cozido, cebolinha e nori (alga).",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/shoyu_lamen.jpeg?raw=true",
                preco: 25.90,
                tipo: ["carne", "massa"]
            },
            {
                id: 102,
                nome: "Miso Lamen",
                descricao: "Caldo à base de pasta de miso, macarrão, fatias de carne de porco, milho, brotos de bambu, nori e cebolinha.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/miso_lamen.jpeg?raw=true",
                preco: 27.50,
                tipo: ["carne", "massa"]
            },
            {
                id: 103,
                nome: "Tonkotsu Lamen",
                descricao: "Caldo cremoso à base de ossos de porco, macarrão, chashu, ovo cozido, kikurage (cogumelos) e cebolinha.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/tonkotsu_lamen.jpeg?raw=true",
                preco: 29.90,
                tipo: ["carne", "massa"]
            },
            {
                id: 104,
                nome: "Shio Lamen",
                descricao: "Caldo leve e claro à base de sal, macarrão, camarão, espinafre, nori e cebolinha.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/shio_lamen.jpeg?raw=true",
                preco: 26.50,
                tipo: ["camarão", "massa"]
            },
            {
                id: 105,
                nome: "Vegetariano Lamen",
                descricao: "Caldo à base de vegetais, macarrão, tofu, brócolis, cenoura, cogumelos e cebolinha.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/veg_lamen.jpeg?raw=true",
                preco: 24.90,
                tipo: ["vegano", "massa"]
            }
        ]
    },
    sushis: {
        id: 2,
        items: [
            {
                id: 201,
                nome: "Sushi de Salmão",
                descricao: "Fatias de salmão fresco sobre arroz temperado com vinagre.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/sushi_salmao.jpeg?raw=true",
                preco: 8.50,
                tipo: ["peixe"]
            },
            {
                id: 202,
                nome: "Sushi de Atum",
                descricao: "Fatias de atum fresco sobre arroz temperado.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/sushi_atum.jpeg?raw=true",
                preco: 9.20,
                tipo: ["peixe"]
            },
            {
                id: 203,
                nome: "Sushi de Ebi (Camarão)",
                descricao: "Camarão cozido sobre arroz temperado.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/sushi_ebi.jpg?raw=true",
                preco: 7.90,
                tipo: ["camarão"]
            },
            {
                id: 204,
                nome: "Sushi de Kani (Caranguejo)",
                descricao: "Carne de caranguejo sobre arroz temperado.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/sushi_kani.jpg?raw=true",
                preco: 8.90,
                tipo: ["frutos do mar"]
            },
            {
                id: 205,
                nome: "Sushi de Abacate",
                descricao: "Fatias de abacate sobre arroz temperado.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/sushi_abacate.jpg?raw=true",
                preco: 6.50,
                tipo: ["vegano"]
            }
        ]
    },
    entradas: {
        id: 3,
        items: [
            {
                id: 301,
                nome: "Gyoza",
                descricao: "Pasteizinhos japoneses recheados com carne de porco e vegetais, servidos com molho de soja.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/gyoza.jpg?raw=true",
                preco: 14.90,
                tipo: ["carne de porco"]
            },
            {
                id: 302,
                nome: "Edamame",
                descricao: "Vagens de soja levemente salgadas.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/edamame.jpg?raw=true",
                preco: 9.50,
                tipo: ["vegano"]
            },
            {
                id: 303,
                nome: "Sunomono",
                descricao: "Salada de pepino com frutos do mar e molho agridoce.",
                img: "https://raw.githubusercontent.com/joaovlara/cardapio-restaurant/main/src/assets/img/sunomono-nozu-foto-frederico-pimentel.webp",
                preco: 12.00,
                tipo: ["frutos do mar"]
            },
            {
                id: 304,
                nome: "Tempura",
                descricao: "Legumes e camarões empanados e fritos, servidos com molho especial.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/tempura.jpg?raw=true",
                preco: 18.50,
                tipo: ["camarão"]
            },
            {
                id: 305,
                nome: "Tempura de Legumes",
                descricao: "Legumes empanados e fritos, servidos com molho especial.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/tempura_veg.jpg?raw=true",
                preco: 15.90,
                tipo: ["vegano"]
            }
        ]
    },
    temakis: {
        id: 4,
        items: [
            {
                id: 401,
                nome: "Temaki de Salmão",
                descricao: "Cone de alga recheado com arroz, salmão cru e cebolinha.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/sushi_salmao.jpeg?raw=true",
                preco: 16.50,
                tipo: ["peixe"]
            },
            {
                id: 402,
                nome: "Temaki de Atum",
                descricao: "Cone de alga recheado com arroz, atum cru e cebolinha.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/temaki_atum.jpg?raw=true",
                preco: 17.20,
                tipo: ["peixe"]
            },
            {
                id: 403,
                nome: "Temaki Califórnia",
                descricao: "Cone de alga recheado com arroz, kani, manga, pepino e maionese.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/temaki_california.jpeg?raw=true",
                preco: 15.90,
                tipo: ["frutos do mar"]
            },
            {
                id: 404,
                nome: "Temaki de Camarão",
                descricao: "Cone de alga recheado com arroz, camarão empanado e alface.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/temaki_camarao.jpeg?raw=true",
                preco: 18.90,
                tipo: ["camarão"]
            },
            {
                id: 405,
                nome: "Temaki Vegano",
                descricao: "Cone de alga recheado com arroz, pepino, cenoura, abacate e cebolinha.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/temaki_veg.jpg?raw=true",
                preco: 14.50,
                tipo: ["vegano"]
            }
        ]
    },
    sobremesas: {
        id: 5,
        items: [
            {
                id: 501,
                nome: "Mochi",
                descricao: "Bolinho de arroz recheado com sorvete (sabores variados).",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/mochi.jpg?raw=true",
                preco: 12.90,
                tipo: ["doce"]
            },
            {
                id: 502,
                nome: "Dorayaki",
                descricao: "Panquecas japonesas recheadas com pasta de feijão azuki.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/dorayaki.jpg?raw=true",
                preco: 10.50,
                tipo: ["doce"]
            },
            {
                id: 503,
                nome: "Anmitsu",
                descricao: "Sobremesa com gelatina de ágar-ágar, frutas e xarope doce.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/anmitsu.jpg?raw=true",
                preco: 13.50,
                tipo: ["doce"]
            },
            {
                id: 504,
                nome: "Sorvete de Chá Verde",
                descricao: "Sorvete cremoso feito com matcha.",
                img: "https://github.com/joaovlara/cardapio-restaurant/blob/main/src/assets/img/sorvete_cha_verde.jpeg?raw=true",
                preco: 8.90,
                tipo: ["doce"]
            },
            {
                id: 505,
                nome: "Frutas da Estação",
                descricao: "Seleção de frutas frescas da estação.",
                img: "https://raw.githubusercontent.com/joaovlara/cardapio-restaurant/main/src/assets/img/frutas.webp",
                preco: 9.00,
                tipo: ["vegano"]
            }
        ]
    }
};

// Imagens geradas por IA

export default cardapio;