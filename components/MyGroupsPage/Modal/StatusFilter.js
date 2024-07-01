import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';

const StatusFilter = () => {
  const radioButtons = useMemo(() => ([
    {
      id: 0,
      label: 'All',
      value: 'All Iteams'
    },
    {
      id: 1,
      label: 'Filled Groups',
      value: 'Filled Groups'
    },
    {
      id: 2,
      label: 'Recent Orders',
      value: 'Recent Orders'
    },
    {
      id: 3,
      label: 'Cancelled Orders',
      value: 'Cancelled Orders'
    },
  ]), [])

  const [selectedId, setSelectedId] = useState()
  return (
    <RadioGroup 
      radioButtons={radioButtons}
      onPress={setSelectedId}
      selectedId={selectedId}
    />
  )
}

export default StatusFilter