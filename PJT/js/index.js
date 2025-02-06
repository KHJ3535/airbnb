import data from "../../data/data.js";

const url = window.location.href;
const idNum = url.split("=")[1];
const newData = data.filter((x) => x.listing.id == idNum);
newData.forEach((x) => {
  const id = x.listing.id;
  const title = x.listing.title;
  const mainTitle = document.getElementById("main__title");
  const name = x.listing.name;
  mainTitle.innerHTML = name;
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
          src="	${contextualPictures4}"
          alt=""
        />
    `;
  container_img.appendChild(mainimg);

  const container_info = document.getElementById("container_info");
  const avgRatingLocalized =
    String(x.avgRatingLocalized) != "null" ? x.avgRatingLocalized : "";
  container_info.innerHTML = `
    <div class="main_lay">
        <div class="main_lay-info"></div>
        <h2>${title}, <span class="text_tt">${name}</span></h2>
        <ul class="hotell_info">
            <li class="hotell_info-sub">최대 인원2명 <span>·</span></li>
            <li class="hotell_info-sub">침실 1개<span>·</span></li>
            <li class="hotell_info-sub">침대 1개<span>·</span></li>
            <li class="hotell_info-sub">욕실 1개</li>
        </ul>
    </div>
    <div class="hotell_review">
        <div class="guest">
          <img
            class="guest_img"
            src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/pdp-shared/components/LaurelItem/ic-system-gf-gold-left-laurel-32-3x.d074c7557225d2a0f3f1289a3dde7a7d.png"
            alt=""
          />
          <div class="guest_good">게스트 <br />선호</div>
          <img
            class="guest_img"
            src="https://a0.muscache.com/airbnb/static/packages/assets/frontend/pdp-shared/components/LaurelItem/ic-system-gf-gold-right-laurel-32-3x.f972b95c999d29e144d9ef970585906d.png"
            alt=""
          />
          <div class="guest_tag">
            에어비앤비 게스트에게 가장 사랑받는 <br />
            숙소
          </div>
          <div class="guest_rating">
            ${avgRatingLocalized}
            <div class="guest_star">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i
              ><i class="fa-solid fa-star"></i>
            </div>
          </div>
          <div class="guest_num">
            276개
            <div class="guest_rivew">후기</div>
          </div>
        </div>
      </div>
      <div class="sub_info-lay">
        <div class="sub_info">
          <ul class="sub_info-list">
            <li class="sub_info-list-one">
              <img
                class="tro"
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/4d090f93-f9a5-4f06-95e4-ca737c0d0ab5.png"
                alt=""
              />상위 10% 숙소
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
            src="https://a0.muscache.com/im/users/23360904/profile_pic/1415242605/original.jpg?im_w=240&im_format=avif"
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
              일부 정보는 자동 번역되었습니다.<button class="hotel_bogi">
                원문보기
              </button>
            </div>
          </div>
        </div>
        <div class="layyyy">
          <div class="infooooo">
            이 영구 텐트는 멋진 시골 전망을 포함하여 자연의 모든 볼거리와 소리를
            즐길 수 있는 럭셔리한 2인용 텐트입니다. 현지 오리들이 헤엄치는
            아름다운 댐에 자리잡고 있습니다. 욕실, 취사 시설 및 아침 식사 용품.
            평화로운 시골에서 낭만적인 휴가를 보내고 싶은 커플을 위해
            설계되었습니다.
          </div>
          <div><span class="dooooo">더 보기></span></div>
        </div>
        <div class="place_layout-one">
          <div class="place">
            <h3>숙박 장소</h3>
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
          <h4>위치</h4>
          <p>Luskintyre, 뉴사우스웨일스, 오스트레일리아</p>
          <div class="map"></div>
          <span class="">숙소 위치가 정확함을 확인했습니다. </span
          ><button class="map_doooo">자세히 알아보기</button>
        </div>
        <div class="place_layout">
          <h5>지역 정보</h5>
          <div>저희는 저희 농장을 사랑하며, 이 아름다운 지역에서 살 수 있어서 정말
            행운이라고 생각합니다. 저희는 이러한 평온함, 평화, 아름다움의 느낌을
            여러분과 공유하고 싶으며, 여러분이 도니브룩에서 휴식을 취하고
            진정으로 중요한 것에 대해 다시 소통할 수 있는 기회를 가질 수 있도록
            여러분을 초대합니다.
          </div>
          <button class="place_info">더 보기 ></button>
          </div>
          
        </div>
      </div>
  `;
  container_info.appendChild(container_infoAdd);
});
