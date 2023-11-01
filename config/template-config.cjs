/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',

    title: '亲爱的喵喵子, 晚上好呀',
    
    desc: `
      
      **现在是{{date.DATA}}**
    
  
      {{holidaytts.DATA}}
      
      --
      
      {{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}

      -
      
      {{comprehensive_horoscope.DATA}}
      
      -
      
      {{birthday_message.DATA}}
      
      -
      
      {{poetry_title.DATA}} 
      {{poetry_content.DATA}}
      
      {{moment_copyrighting.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
