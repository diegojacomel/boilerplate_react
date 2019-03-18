### Basic usage

```js
const arrayOptions = [
    'Opção 1',
    'Opção 2',
    'Opção 3',
    'Opção 4',
    'Opção 5'
];

<Select>
    <option value="">Selecione uma opção</option>
    {arrayOptions.map((option, index) => {
        return (
            <option value={option}>{option}</option>
        )
    })
    }
</Select>
```