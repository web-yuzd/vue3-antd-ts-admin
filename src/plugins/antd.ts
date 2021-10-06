import type { App } from 'vue'

import {
  Modal,
  Button,
  Menu,
  Table,
  Input,
  Form,
  Checkbox,
  Radio,
  Col,
  Row,
  Select,
  DatePicker
} from 'ant-design-vue'

export function setupAntd(app: App<Element>): void {
  app
    .use(Modal)
    .use(Button)
    .use(Menu)
    .use(Table)
    .use(Input)
    .use(Form)
    .use(Checkbox)
    .use(Radio)
    .use(Col)
    .use(Row)
    .use(Select)
    .use(DatePicker)
}
