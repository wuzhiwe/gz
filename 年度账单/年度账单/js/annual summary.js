window.onload = function () {
  let z09 = document.querySelector('.z_09')//四个带标记的柱子
  let z12 = document.querySelector('.z_12')
  let gz = document.querySelector('.gz')
  let z15 = document.querySelector('.z_15')
  let z30 = document.querySelector('.z_30')
  let gz2 = document.querySelector('.gz2')
  let zz = document.querySelectorAll('.zz')  //获取所有的梯子
  let zw = document.querySelectorAll('.zw')  //获取电话，金币，WiFi和下面的三个柱子
  let two = document.querySelector('.two') //第二个页面
  let one = document.querySelector('.one') //第一个页面 
  let gq = document.querySelector('.gq') //获取光圈
  let gq2 = document.querySelector('.gq2')
  let gq3 = document.querySelector('.gq3')
  let gq4 = document.querySelector('.gq4')
  let phone = document.querySelector('.phone')
  let top = document.querySelector('.top') //头部文字
  let top2 = document.querySelector('.top2')
  let top3 = document.querySelector('.top3')
  let top4 = document.querySelector('.top4')
  let xj = document.querySelector('#xiaoji')  //小鸡
  let qiang = document.querySelector('#qiang')  //墙的音效
  let shangtian = document.querySelector('#shangtian')//上天音效
  let diyi = document.querySelector('#diyi') //第一个页面音效
  let qipao = document.querySelector('.qipao')  //气泡
  let bg = document.querySelector('.bg')
  let disan = document.querySelector('.disan')
  let san = document.querySelector('.san')
  let tizi = document.querySelector('.tizi') //梯子
  let three = document.querySelector('.three')  //第三个页面
  let bg_1=document.querySelector('.bg_1')

  let flag = false
  let flag2 = false

  document.ontouchmove = function () {
    one.style.display = 'none'
    two.style.display = 'block'
    document.ontouchmove = null
    //鸽子移动
    function move(x) {
      let i = 1
      g1 = setInterval(() => {
        if (i >= 5) i = 1
        gz2.setAttribute('src', `../gezi/gz${x}${i}.png`)
        i++
      }, 200)

    }
    var se
    var j = 0
    // 楼梯升起
    function gao(z) {
      se = setInterval(function () {
        zz[j].classList.add('move')

        j = z
        z++
        // console.log(z)
        if (z == 8) {
          clearInterval(se)
        }
        if (z == 13) {
          clearInterval(se)
        }
        if (z == 18) {
          clearInterval(se)
        }

        if (j > zz.length - 1) {
          j = 0
          clearInterval(se)

        }
      }, 500)

    }
    // 封装鸽子第一段转头
    function xj1(a, b) {
      setTimeout(() => {
        clearInterval(g1)
        move(a)
      }, b)

    }
    function xj1_1(b) {
      setTimeout(() => {
        clearInterval(g1)
        gz2.setAttribute('src', `../gezi/gz${1}${1}.png`)
        xj.pause()
      }, b)
    }
    // 小鸡第二段转头
    function xj2(b) {

      setTimeout(() => {
        clearInterval(g1)
        gz2.setAttribute('src', `../gezi/gz${1}${1}.png`)
        xj.pause()


      }, b)
    }
    // 小鸡第三段转头
    function xj3(b) {
      setTimeout(() => {
        clearInterval(g1)
        // 定格最后一张图片
        gz2.setAttribute('src', `../gezi/gz${2}${1}.png`)
        xj.pause()


      }, b)
    }
    // 小鸡第四段转头
   
    function xj4(b) {
      setTimeout(() => {
        clearInterval(g1)
        gz2.setAttribute('src', `../gezi/gz${0}${1}.png`)
        xj.pause()
        shangtian.play()

        bg.setAttribute('class', 'bg bg1')
        disan.setAttribute('class', ' disan xiajiang')
        san.setAttribute('class', 'san xiajiang')
        tizi.setAttribute('class', ' zz tizi1')

        gz.style.display = 'block'
        gz.setAttribute('class', 'gz shengtian')
        setTimeout(function () {
          three.style.display = 'block'
         
        }, 4200) 
      }, b)
    }
  
    // 到达指定地方图片文字更改
    function wenzi(a, b) {
      a.style.display = b
      a.style.display = b
      a.style.display = b
      a.style.display = b
    }


    // 第一段 到达指定时间，墙音效和楼梯升起
    setTimeout(function () {
      gao(0)
      qiang.play()

    }, 500)
    // 到达指定时间，墙音效关闭
    setTimeout(() => {
      qiang.pause()
    }, 7000)
    //到达指定时间，光圈和气泡产生
    setTimeout(function () {
      gq.style.display = 'block'
      qipao.style.display = 'block'

    }, 8000)

    var x = 0
    var se1
    // 另外三根柱子升起动画
    function zhu(w) {
      se1 = setInterval(function () {
        zw[x].classList.add('z20')
        x = w
        w++
        console.log(w)
        if (w == 1) {
          clearInterval(se1)
        }
        if (w == 3) {
          clearInterval(se1)
        }
        if (w == 5) {
          clearInterval(se1)
        }

        if (x > zw.length - 1) {
          x = 0
          clearInterval(se1)

        }

      }, 100)
    }

    //点击光圈1产生效果
    gq.onclick = function () {
      xj.play()    //小鸡走路音效产生
      // 点击光圈让光圈消失
      gq.style.display = 'none'
      qipao.style.display = 'none'
      // 添加激活状态
      gz.setAttribute('class', ' gz active')
      gz2.setAttribute('src', `../gezi/gz${0}${4}.png`)
      //第一段鸽子转头动画 
      move(0)
      xj1(1, 1600)
      xj1(0, 3060)
      xj1(1, 6180)
      xj1_1(8300)


      // 第二段墙的声音和柱子升起
      setTimeout(function () {
        qiang.play()
        zhu(1)
      }, 7500)
      //柱子升起后才出现文字
      setTimeout(function () {
        wenzi(top, 'block')
        wenzi(top2, 'none')
        wenzi(top3, 'none')
        wenzi(top4, 'none')
      }, 8200)

      //  第二段梯子升起
      setTimeout(function () {
        gao(8)
      }, 8281)
      // 第二个光圈出现和墙的声音停止
      setTimeout(function () {
        gq2.style.display = 'block'
        qiang.pause()

      }, 13000)
    }
    // 点击光圈2产生效果
    gq2.onclick = function () {
      gq2.style.display = 'none'
      xj.play()
      gz.setAttribute('class', 'gz active2')
      gz2.setAttribute('src', `../gezi/gz${0}${4}.png`)
      // 第二段鸽子转头
      move(0)

      xj1(1, 400)
      xj2(4500)
      // 墙声音，柱子
      setTimeout(function () {
        qiang.play()
        zhu(3)
      }, 4000)

      setTimeout(function () {

        wenzi(top, 'none')
        wenzi(top2, 'none')
        wenzi(top4, 'none')
        wenzi(top3, 'block')
      }, 4500)


      setTimeout(function () {
        gao(13)
      }, 4488)
      setTimeout(function () {
        gq3.style.display = 'block'
        qiang.pause()
        flag = true
      }, 9000)
    }

    // 点击光圈3产生效果
    gq3.onclick = function () {
      xj.play()
      flag = false
      gq3.style.display = 'none'
      gz.setAttribute('class', 'gz active3')
      gz2.setAttribute('src', `../gezi/gz${2}${4}.png`)
      // 第三段鸽子转头
      move(2)
      xj1(3, 1600)
      xj1(2, 3200)
      xj3(5400)


      setTimeout(function () {
        zhu(5)
        qiang.play()
      }, 5000)
      setTimeout(function () {
        wenzi(top, 'none')
        wenzi(top2, 'none')
        wenzi(top3, 'none')
        wenzi(top4, 'block')
      }, 5500)

      setTimeout(function () {
        gao(18)
        // flag=true
      }, 5174)
      setTimeout(function () {
        gq4.style.display = 'block'
        qiang.pause()
        flag = true
      }, 9000)
    }

    //点击光圈4产生移动
    gq4.onclick = function () {
      xj.play()
      flag = false
      gq4.style.display = 'none'
      gz.setAttribute('class', 'gz active4')
      gz2.setAttribute('src', `../gezi/gz${3}${4}.png`)
      // 第四段鸽子转头
      move(3)
      xj1(0, 2500)
      xj4(4300)

      setTimeout(function () {

        wenzi(top4, 'none')
        wenzi(top3, 'none')
        wenzi(top, 'none')
        wenzi(top2, 'none')
      }, 3800)

    }

  }

  /* 获取箭头，使得箭头可以呈现水波形状 */
  let jiantou1 = document.querySelectorAll('.jiantou1')
  for (let i = 0; i < jiantou1.length; i++) {
    setTimeout(function () {
      jiantou1[2 - i].setAttribute('class', ' jiantou1 move2')
    }, i * 900)

  }
  // 瞬移改变文字

  function s1(a, b) {
    gz2.setAttribute('src', `../gezi/gz${a}${b}.png`)
    flag = true
  }
  // 改变文字
  function wenzi1(a, b) {
    a.style.display = b
    a.style.display = b
    a.style.display = b
    a.style.display = b
  }

  // 瞬移动画
  z09.onclick = function () {
    if (flag) {
      flag = false
      //判断类名是否是其他柱子的状态
      if (gz.getAttribute('class') == 'gz shunyi2' || 'gz shunyi3' || 'gz active2' || 'gz active3') {
        // 添加瞬移状态
        gz.setAttribute('class', 'gz shunyi1')
        s1(0, 1)
        wenzi1(top, 'none')
        wenzi1(top2, 'block')
        wenzi1(top3, 'none')
        wenzi1(top4, 'none')

      }


    }
  }
  z15.onclick = function () {
    if (flag) {
      flag = false
      if (gz.getAttribute('class') == 'gz shunyi1' || 'gz shunyi3' || 'gz active1' || 'gz active3') {
        gz.setAttribute('class', 'gz shunyi2')
        s1(1, 1)
        wenzi1(top, 'block')
        wenzi1(top2, 'none')
        wenzi1(top3, 'none')
        wenzi1(top4, 'none')

      }
    }

  }
  z30.onclick = function () {
    if (flag&&flag2) {
      flag = false
      if (gz.getAttribute('class') == 'gz shunyi1' || 'gz shunyi2' || 'gz active1' || 'gz active2') {
        gz.setAttribute('class', 'gz shunyi3')
        s1(2, 1)
        wenzi1(top, 'none')
        wenzi1(top2, 'none')
        wenzi1(top3, 'block')
        wenzi1(top4, 'none')
      }
    }

  }
  // 第一个页面音乐
  one.onclick = function () {
    diyi.play()
  }


}






