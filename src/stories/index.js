import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

// import { Button, Welcome } from '@storybook/react/demo'

import { Button, TomatoButton } from '../components/Button/Button'

storiesOf('Button', module)
  .add('Primary', () => (
    <div>
      <Button primary>Hello Button</Button>
      <Button>Hello Button</Button>
      <Button full>Hello Button</Button>
    </div>
  ))
  .add('TomatoButton', () => (
    <Button onClick={action('clicked')}>Tomato</Button>
  ))

storiesOf('Input', module).add('Primary', () => <input />)
