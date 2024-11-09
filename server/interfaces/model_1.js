export const model1 = {
    panels: [
        {
            name: 'panel1',
            width: '100',
            height: '100',
            cssdata: 'panel_style_1'
        },
        {
            name: 'panel2',
            width: '100',
            height: '100',
            cssdata: 'panel_style_2'
        }
    ],
    components: [
        {
            type: 'div',
            name: 'div_panel1_1',
            father: 'panel1',
            position: '0,0'
        },
        {
            type: 'div',
            name: 'div_panel2_1',
            father: 'panel2',
            position: '0,0'
        },
        {
            type: 'div',
            name: 'div_panel2_2',
            father: 'panel2',
            position: '0,0'
        }
    ]
};