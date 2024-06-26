const cardapio = {
    lamens: {
        id: 1,
        items: [
            {
                id: 101,
                nome: "Shoyu Lamen",
                descricao: "Caldo à base de molho de soja, macarrão, fatias de chashu (carne de porco), ovo cozido, cebolinha e nori (alga).",
                img: "url_da_imagem_shoyu_lamen",
                preco: 25.90
            },
            {
                id: 102,
                nome: "Miso Lamen",
                descricao: "Caldo à base de pasta de miso, macarrão, fatias de carne de porco, milho, brotos de bambu, nori e cebolinha.",
                img: "url_da_imagem_miso_lamen",
                preco: 27.50
            },
            {
                id: 103,
                nome: "Tonkotsu Lamen",
                descricao: "Caldo cremoso à base de ossos de porco, macarrão, chashu, ovo cozido, kikurage (cogumelos) e cebolinha.",
                img: "url_da_imagem_tonkotsu_lamen",
                preco: 29.90
            },
            {
                id: 104,
                nome: "Shio Lamen",
                descricao: "Caldo leve e claro à base de sal, macarrão, camarão, espinafre, nori e cebolinha.",
                img: "url_da_imagem_shio_lamen",
                preco: 26.50
            },
            {
                id: 105,
                nome: "Vegetariano Lamen",
                descricao: "Caldo à base de vegetais, macarrão, tofu, brócolis, cenoura, cogumelos e cebolinha.",
                img: "url_da_imagem_vegetariano_lamen",
                preco: 24.90,
                vegano: true
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
                img: "url_da_imagem_sushi_salmao",
                preco: 8.50
            },
            {
                id: 202,
                nome: "Sushi de Atum",
                descricao: "Fatias de atum fresco sobre arroz temperado.",
                img: "url_da_imagem_sushi_atum",
                preco: 9.20
            },
            {
                id: 203,
                nome: "Sushi de Ebi (Camarão)",
                descricao: "Camarão cozido sobre arroz temperado.",
                img: "url_da_imagem_sushi_ebi",
                preco: 7.90
            },
            {
                id: 204,
                nome: "Sushi de Kani (Caranguejo)",
                descricao: "Carne de caranguejo sobre arroz temperado.",
                img: "url_da_imagem_sushi_kani",
                preco: 8.90
            },
            {
                id: 205,
                nome: "Sushi de Abacate",
                descricao: "Fatias de abacate sobre arroz temperado.",
                img: "url_da_imagem_sushi_abacate",
                preco: 6.50,
                vegano: true
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
                img: "url_da_imagem_gyoza",
                preco: 14.90
            },
            {
                id: 302,
                nome: "Edamame",
                descricao: "Vagens de soja levemente salgadas.",
                img: "url_da_imagem_edamame",
                preco: 9.50,
                vegano: true
            },
            {
                id: 303,
                nome: "Sunomono",
                descricao: "Salada de pepino com frutos do mar e molho agridoce.",
                img: "url_da_imagem_sunomono",
                preco: 12.00
            },
            {
                id: 304,
                nome: "Tempura",
                descricao: "Legumes e camarões empanados e fritos, servidos com molho especial.",
                img: "url_da_imagem_tempura",
                preco: 18.50
            },
            {
                id: 305,
                nome: "Tempura de Legumes",
                descricao: "Legumes empanados e fritos, servidos com molho especial.",
                img: "url_da_imagem_tempura_legumes",
                preco: 15.90,
                vegano: true
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
                img: "url_da_imagem_temaki_salmao",
                preco: 16.50
            },
            {
                id: 402,
                nome: "Temaki de Atum",
                descricao: "Cone de alga recheado com arroz, atum cru e cebolinha.",
                img: "url_da_imagem_temaki_atum",
                preco: 17.20
            },
            {
                id: 403,
                nome: "Temaki Califórnia",
                descricao: "Cone de alga recheado com arroz, kani, manga, pepino e maionese.",
                img: "url_da_imagem_temaki_california",
                preco: 15.90
            },
            {
                id: 404,
                nome: "Temaki de Camarão",
                descricao: "Cone de alga recheado com arroz, camarão empanado e alface.",
                img: "url_da_imagem_temaki_camarao",
                preco: 18.90
            },
            {
                id: 405,
                nome: "Temaki Vegano",
                descricao: "Cone de alga recheado com arroz, pepino, cenoura, abacate e cebolinha.",
                img: "url_da_imagem_temaki_vegano",
                preco: 14.50,
                vegano: true
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
                img: "url_da_imagem_mochi",
                preco: 12.90
            },
            {
                id: 502,
                nome: "Dorayaki",
                descricao: "Panquecas japonesas recheadas com pasta de feijão azuki.",
                img: "url_da_imagem_dorayaki",
                preco: 10.50
            },
            {
                id: 503,
                nome: "Anmitsu",
                descricao: "Sobremesa com gelatina de ágar-ágar, frutas e xarope doce.",
                img: "url_da_imagem_anmitsu",
                preco: 13.50
            },
            {
                id: 504,
                nome: "Sorvete de Chá Verde",
                descricao: "Sorvete cremoso feito com matcha.",
                img: "url_da_imagem_sorvete_cha_verde",
                preco: 8.90
            },
            {
                id: 505,
                nome: "Frutas da Estação",
                descricao: "Seleção de frutas frescas da estação.",
                img: "url_da_imagem_frutas_estacao",
                preco: 9.00,
                vegano: true
            }
        ]
    }
};

export default cardapio;
