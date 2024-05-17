import React from 'react'
import { Image } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { pxTransform } from '@tarojs/taro'

const Demo7 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  const modes = [
    'top',
    'bottom',
    'center',
    'left',
    'right',
    'top left',
    'top right',
    'bottom left',
    'bottom right',
  ]
  return (
    <>
      <View style={{ display: 'flex', flexWrap: 'wrap' }}>
        {modes.map((mode) => {
          return (
            <View
              style={{ width: pxTransform(100), height: pxTransform(100) }}
              key={mode}
            >
              <Image
                src={src}
                mode={mode as any}
                width={pxTransform(80)}
                height={pxTransform(80)}
              />
            </View>
          )
        })}
      </View>
    </>
  )
}
export default Demo7
