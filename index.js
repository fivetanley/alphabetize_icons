var cheerio = require('cheerio')
  , fs      = require('fs')
  , _       = require('lodash')
  , file
  , $

file = fs.readFileSync('data.html')
$    = cheerio.load(file.toString('utf8'))

var spans = $('.span3 > i')

spans = _.sortBy(spans, function(span){
  return $(span).attr('class')
});

spans = _.groupBy(spans, function(span, b){
  return Math.floor(b/4);
})

spans = _.toArray(spans)

var str = ''
spans.forEach(function(span){
  str += '<div class="row-fluid">\n'
  span.forEach(function(s){
    str += '  <span class="span3"><i class="' + $(s).attr('class') + '"></i></span>\n'
  })
  str += '</div>\n'
})

console.log(str)
