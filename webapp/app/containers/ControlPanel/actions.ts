/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import { returnType } from 'utils/redux'
import { ActionTypes } from './constants'
import { IControlBase } from 'app/components/Control/types'

export const ControlActions = {
  setGlobalControlPanelFormValues(values: object) {
    return {
      type: ActionTypes.SET_GLOBAL_CONTROL_PANEL_FORM_VALUES,
      payload: {
        values
      }
    }
  },
  setLocalControlPanelFormValues(values: object, itemId: number) {
    return {
      type: ActionTypes.SET_LOCAL_CONTROL_PANEL_FORM_VALUES,
      payload: {
        values,
        itemId
      }
    }
  },
  setSelectOptions(controlKey: string, options: any[], itemId?: number) {
    return {
      type: ActionTypes.SET_SELECT_OPTIONS,
      payload: {
        controlKey,
        options,
        itemId
      }
    }
  },
  setConfigFormValues(formValues: IControlBase) {
    return {
      type: ActionTypes.SET_CONFIG_FORM_VALUES,
      payload: {
        formValues
      }
    }
  }
}

const mockAction = returnType(ControlActions)
export type ControlActionType = typeof mockAction

export default ControlActions
