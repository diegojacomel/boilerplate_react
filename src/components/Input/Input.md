### Basic usage

```js
<Input
    type="text"
    name="example"
    id="example"
    placeholder="Digite um texto"
    onChange={() => console.log('onChange')}
    onBlur={() => console.log('onBlur')}
    onKeyUp={() => console.log('onKeyUp')}
    disabled={false}
/>
```

## Props

#### **icon**

```js
<Input
    icon="home"
    type="text"
    name="example"
    id="example"
    placeholder="Digite um texto"
    onChange={() => console.log('onChange')}
    onBlur={() => console.log('onBlur')}
    onKeyUp={() => console.log('onKeyUp')}
    disabled={false}
/>
```

The icon attribute define the icon that will be appear inside the input element.

type: string

#### **type**

The name attribute specifies the name of input.

type: string

#### **id**

The id attribute specifies the id of input.

type: string

#### **value**

The value attribute specifies the value of input.

type: any

#### **placeholder**

The placeholder attribute specifies the placeholder of input.

type: string

#### **disabled**

The disabled attribute specifies the disabled of input.

type: bool

#### **onChange**

```js
let value = '';

handleChange = (value) => {
    value = value
}

<div>
    <Input
        type="text"
        onChange={e => this.handleChange(e.target.value)}
    />
    <p>
        {value}
    </p>
</div>
```

The onChange attribute to do the bind between function and element.

type: func

#### **onBlur**

The onBlur attribute to do the bind between function and element.

type: func

#### **onKeyUp**

The onKeyUp attribute to do the bind between function and element.

type: func
