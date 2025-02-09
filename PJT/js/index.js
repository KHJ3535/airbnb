import data from "../../common/data/data.js";

const url = window.location.href;
const idNum = url.split("=")[1];
const newData = data.filter((x) => x.listing.id == idNum);
newData.forEach((x) => {
  const id = x.listing.id;
  const title = x.listing.title;
  const mainTitle = document.getElementById("main__title");
  const name = x.listing.name;
  mainTitle.innerHTML = name;
  const price = x.structuredDisplayPrice.primaryLine.price;
  const qualifier = x.structuredDisplayPrice.primaryLine.qualifier;
  const checkin = x.listingParamOverrides.checkin;
  const checkout = x.listingParamOverrides.checkout;
  const checkinDate = new Date(checkin);
  const checkoutDate = new Date(checkout);

  const time = checkoutDate - checkinDate;
  const days = time / (1000 * 3600 * 24);
  const totalprice = price.split("₩")[1].split(",").join("") * days;
  /////////
  const mainimg = document.createElement("a");
  const container_img = document.getElementById("container_img");
  const contextualPictures = x.contextualPictures[0].picture;
  const contextualPictures1 = x.contextualPictures[1].picture;
  const contextualPictures2 = x.contextualPictures[2].picture;
  const contextualPictures3 = x.contextualPictures[3].picture;
  const contextualPictures4 = x.contextualPictures[4].picture;

  container_img.innerHTML = `
       <img
          class="main_img"
          src="${contextualPictures}"
          alt=""
        />
        <img
          class="main_img-sub"
          src="${contextualPictures1}"
          alt=""
        />
        <img
          class="main_img-sub-two"
          src="${contextualPictures2}"
          alt=""
        />
        <img
          class="main_img-sub-three"
          src="${contextualPictures3}"
          alt=""
        />
        <img
          class="main_img-for"
          src="   ${contextualPictures4}"
          alt=""
        />
    `;
  container_img.appendChild(mainimg);

  const container_info = document.getElementById("container_info");

  const avgRatingLocalized =
    String(x.avgRatingLocalized) != "null" ? x.avgRatingLocalized : "";
  container_info.innerHTML = `
    <div class="maininfo__wrap">
      <div class="maininfo__left">
      <div class="main_lay">
        <div class="main_lay-info">
        <h4 class="hidden__title">사막에서 즐기는 텐트 투어</h4>
          <h3 class="main__title">${title}, ${name}</h3>
          <ul class="hotell_info">
            <li class="hotell_info-sub">최대 인원2명 <span>·</span></li>
            <li class="hotell_info-sub">침실 1개<span>·</span></li>
            <li class="hotell_info-sub">침대 1개<span>·</span></li>
            <li class="hotell_info-sub">욕실 1개</li>
          </ul>
        </div>

        <div class="sub_info-lay">
          <div class="sub_info">
            <ul class="sub_info-list">
              <li class="sub_info-list-one">
                <i class="fa-solid fa-trophy"></i>
                상위 10% 숙소
              </li>
              <li class="sub_info-list-two">
                <i class="fa-solid fa-medal"></i>슈퍼호스트
              </li>
              <li class="sub_info-list-three">
                <i class="fa-solid fa-key"></i>편의성이 뛰어난 체크인 절차
              </li>
              <li class="sub_info-list-for">
                <i class="fa-solid fa-tent"></i>캠핑장
              </li>
              <li class="sub_info-list-five">
                <i class="fa-solid fa-location-dot"></i>훌륭한 위치
              </li>
            </ul>
          </div>
        </div>
        <div class="host_layout">
          <div class="host_info">
            <img
              class="host_photo"
              src="${contextualPictures1}"
              alt=""
            />
            <div class="host_name">
              <div class="host_name-own">호스트:Phil님</div>
              <div class="host_hosting">슈퍼호스트 · 호스팅 경력 10년</div>
            </div>
          </div>
          <div class="hotels_info-lay">
            <div class="hotels_info-laaa">
              <div class="hotel_info">
                일부 정보는 자동 번역되었습니다.<a class="hotel_bogi" href="#">원문보기</a>
              </div>
            </div>
          </div>
          <div class="layyyy">
            <div class="infooooo">
              이 영구 텐트는 멋진 시골 전망을 포함하여 자연의 모든 볼거리와
              소리를 즐길 수 있는 럭셔리한 2인용 텐트입니다. 현지 오리들이
              헤엄치는 아름다운 댐에 자리잡고 있습니다. 욕실, 취사 시설 및 아침
              식사 용품. 평화로운 시골에서 낭만적인 휴가를 보내고 싶은 커플을
              위해 설계되었습니다.
            </div>
            <div><a class="dooooo" href="#">더 보기</a></div>
          </div>
          <div class="place_layout-one">
            <div class="place">
              <h3 class="room_place-one">숙박 장소</h3>
              <img
                class="room_photo"
                src="https://a0.muscache.com/im/pictures/56651653/23ae78d2_original.jpg?im_w=320&im_format=avif"
                alt=""
              />
              <div class="room">침실</div>
              <div class="ace">퀸사이즈 침대1개</div>
            </div>
          </div>
          <div class="map_layout">
            <h4 class="hotel__location">위치</h4>
            <p>Luskintyre, 뉴사우스웨일스, 오스트레일리아</p>
            <div class="map"><iframe class="google__map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d65975.61021892927!2d151.9382238312475!3d-32.40026046895255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z7Jik7Iqk7Yq466CI7J2866as7JWEIOy6oO2VkeyepQ!5e0!3m2!1sko!2skr!4v1738910696131!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            <span class="hotle__location-check">숙소 위치가 정확함을 확인했습니다. </span
            ><a class="map_doooo" href="#">자세히 알아보기</a>
          </div>
          <div class="place_layout">
            <h5 class="hotle__place-info-title">지역 정보</h5>
            <div class="hotle__place-info">
              저희는 저희 농장을 사랑하며, 이 아름다운 지역에서 살 수 있어서
              정말 행운이라고 생각합니다. 저희는 이러한 평온함, 평화, 아름다움의
              느낌을 여러분과 공유하고 싶으며, 여러분이 도니브룩에서 휴식을
              취하고 진정으로 중요한 것에 대해 다시 소통할 수 있는 기회를 가질
              수 있도록 여러분을 초대합니다.
            </div>
            <a class="place_info" href="#">더 보기</a>
          </div>
        </div>
      </div>
    </div>

    <div class="maininfo__right">
      <div class="maininfo__stickybox">
        <div class="stickybox__top">
          <span class="stickybox__price">${price} <span>${qualifier}</span></span>
        </div>
        <div class="stickybox__reservation">
          <div class="stickybox__check">
            <div class="stickybox__check--top">
              <div class="stickybox__checkin">
                <div class="stickybox__title">체크인</div>
                <input type="text" value="${checkin}" readonly />
              </div>
              <div class="stickybox__checkout">
                <div class="stickybox__title">체크아웃</div>
                <input type="text" value="${checkout}" readonly />
              </div>
            </div>

            <div class="stickybox__check--bottom">
                <span class="stickybox__title">인원</span>
              <div class="stickybox__people">
                <span class="guest__text">게스트 <span class="guest__count">0</span>명</span>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="stickybox__people--dropdown">
          <div class="people-option">
            <span>성인</span>
            <div class="counter">
              <button class="btn-minus">-</button>
              <span class="adult__count">0</span> 
              <button class="btn-plus">+</button>
            </div>
          </div>
        </div>
        <button class="reservation__btn"><a href="../../CJH/index.html?id=${id}">예약하기</a></button>
        <p class="price__guide">예약 확정 전에는 요금이 청구되지 않습니다.</p>

        <div class="total__price">
          <span>총액</span>
          <span>₩ ${totalprice.toLocaleString()}</span>
        </div>
      </div>
    </div>


  </div>
  `;
});
