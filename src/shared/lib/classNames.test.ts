import { classNames } from './classNames';

describe('classNames', () => {
    test('with only 1st param', () => {
        expect(classNames('myClass')).toBe('myClass');
    });
    test('with additional class', () => {
        const expected = 'myClass class1 class2';
        expect(classNames('myClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'myClass class1 class2 hovered scrollable';
        expect(classNames('myClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'myClass class1 class2 hovered';
        expect(classNames('myClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
            .toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'myClass class1 class2 hovered';
        expect(classNames('myClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2']
        ))
            .toBe(expected);
    });
    
});