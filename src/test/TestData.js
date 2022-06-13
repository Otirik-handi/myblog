import {
  nanoid
} from "nanoid"

class DescData {
  constructor(title, desc, tags) {
    this.id =
      nanoid()
    this.aid = this.id + '-detail'
    this.title = title
    this.desc = desc
    this.tags = tags
    this.author = 'Otirik'
    this.publish_time = (new Date()).toString().match(/[\s\S]+ \d+:\d+:\d+/g)[0]
    this.image = 'https://s3.bmp.ovh/imgs/2022/05/28/3ee36dacdf5a8896.jpg'
  }
}


class DetailData extends DescData {
  constructor(title, desc, tags, content, like, point, saying = '', subTitle = '') {
    super(title, desc, tags)
    this.content = content
    this.like = like
    this.point = point
    this.saying = saying
    this.subTitle = subTitle
  }
}

class RankData {
  constructor(title, like) {
    this.title = title
    this.like = like
    this.id = nanoid()
  }
}


const TestDescData = [
  new DescData("Javascript之手写Promise", "了解Promise的工作原理", ['javascript', 'promise']),
  new DescData("Javascript之手写new.", "了解new的工作原理", ['javascript', 'new'])
]

const TestDetailData = [{
  // new DetailData("Javascript之手写Promise", "了解Promise的工作原理", ['javascript'])
}]

const TestRankData = [
  new RankData('javascript之手写new', 553),
  new RankData('javascript之手写promise', 1009),
  new RankData('ping实现', 253),
]

export default {
  TestDescData,
  TestDetailData,
  TestRankData
}