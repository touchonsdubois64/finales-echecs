// ==================================================
// BIBLIOTHÈQUE DES POSITIONS
// ==================================================
//
// Pour ajouter une position, copiez simplement un bloc
// et modifiez :
//    title = nom affiché dans le menu
//    fen   = position FEN
//
// Vous pouvez ensuite créer autant de positions
// que vous le souhaitez.
//
// ==================================================


export const libraries = {

    // ==================================================
    // FINALES DE PIONS
    // ==================================================

    pions: {

        title: 'Finales de pions',

        positions: [

            {
                id: 'pion-roi-contre-roi-01',

                title:
                    'Roi et pion contre Roi — position 1',

                fen:
                    '8/5k2/8/8/8/2P5/8/3K4 w - - 0 1'
            },


            {
                id: 'pion-roi-contre-roi-02',

                title:
                    'Roi et pion contre Roi — position 2',

                fen:
                    '8/1k6/8/8/8/1K4P1/8/8 b - - 0 1'
            },


            {
                id: 'opposition-01',

                title:
                    'Opposition — position 1',

                fen:
                    '8/8/8/8/4k3/8/4K3/4P3 w - - 0 1'
            },


            {
                id: 'opposition-02',

                title:
                    'Opposition — position 2',

                fen:
                    '8/8/8/4k3/8/4K3/8/4P3 w - - 0 1'
            }

        ]

    },


    // ==================================================
    // FINALES DE TOURS
    // ==================================================

    tours: {

        title: 'Finales de tours',

        positions: [

            {
                id: 'tour-01',

                title:
                    'Tour et pion contre Tour — position 1',

                fen:
                    '8/8/8/8/8/4K3/4P2k/7R w - - 0 1'
            },


            {
                id: 'tour-02',

                title:
                    'Tour et pion contre Tour — position 2',

                fen:
                    '8/8/8/8/8/4K3/4P2k/2R5 w - - 0 1'
            }

        ]

    },


    // ==================================================
    // FINALES DE FOUS
    // ==================================================

    fous: {

        title: 'Finales de fous',

        positions: [

            {
                id: 'fous-01',

                title:
                    'Fou contre pion — position 1',

                fen:
                    '8/8/8/8/8/2K5/4P3/2B1k3 w - - 0 1'
            }

        ]

    },


    // ==================================================
    // FINALES DE CAVALIERS
    // ==================================================

    cavaliers: {

        title: 'Finales de cavaliers',

        positions: [

            {
                id: 'cavaliers-01',

                title:
                    'cavalier contre pion — position 1',

                fen:
                    '8/8/8/8/8/2K5/4P3/2N1k3 w - - 0 1'
            }

        ]

    },


    // ==================================================
    // MATS TECHNIQUES
    // ==================================================

    mats: {

        title: 'Mats Techniques',

        positions: [

            {
                id: 'mats-01',

                title:
                    'Fou et Cavalier contre Roi — Le W',

                fen:
                    '2k5/2N5/2K5/2B5/8/8/8/8 w - - 0 1'
            },

            {
                id: 'mats-02',

                title:
                    'Fou et Cavalier contre Roi — Les Triangles',

                fen:
                    '8/2B5/8/2N5/6k1/8/6K1/8 w - - 0 1'
            },

            {
                id: 'mats-03',

                title:
                    'Fou et Cavalier contre Roi — Alignement central',

                fen:
                    '8/8/4k3/4N3/4K3/4B3/8/8 w - - 0 1'
            },

            {
                id: 'mats-04',

                title:
                    'Fou et Cavalier contre Roi — Random',

                fen:
                    '8/8/8/8/8/4k3/8/B2K3N w - - 0 1'
            }

            
        ]

    }

};

