### Basic usage

## Props

#### **side**

The side attribute specifies the button side.

type: string

- left

```js
<InputButton
    icon="home"
    side="left"
    inputChange={e => console.log(e.target.value)}
    buttonClick={() => console.log('button clicked')}
/>
```

- right

```js
<InputButton
    icon="home"
    side="right"
    inputChange={e => console.log(e.target.value)}
    buttonClick={() => console.log('button clicked')}
/>
```