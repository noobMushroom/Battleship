import { isExportDeclaration, textSpanContainsPosition } from 'typescript'
import {ship} from '../src/ship'

test('will it work??', ()=>{
    expect(ship('deepak')).toBe('deepak')
})