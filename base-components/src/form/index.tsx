import { Form as NextForm } from '@alifd/next'
import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import CNCHARHOC from '../utils/cnCharHoc'
import { useCssVar } from '../utils/useCssVar'

type NextFormProps = React.ComponentProps<typeof NextForm>

const Form: typeof NextForm = React.forwardRef((props: NextFormProps, ref) => {
  const theme = useCssVar('--alicloudfe-components-theme').trim()
  if (theme === 'wind' || theme.startsWith('xconsole')) {
    return <NextForm labelTextAlign="left" {...props} ref={ref as any} />
  }
  return <NextForm {...props} ref={ref as any} />
}) as any

hoistNonReactStatics(Form, NextForm)

Form.Submit = CNCHARHOC(Form.Submit) as any
Form.Reset = CNCHARHOC(Form.Reset) as any

export default Form
