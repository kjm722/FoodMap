var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(36.83947776995263, 127.1862027209088), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
            };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 장애편의 마커가 표시될 좌표 배열입니다
    var JangPositions = [ 
        {
            title:'전통차 담소',
            address_name:'동남구 각원사길 149(안서동)',
            road_address_name:'안서동 143',
            phone:'041-565-3693',
            LatLng: new kakao.maps.LatLng(36.8318914901581,127.18669325992305)
        },
        {
            title:'초당골순두부',
            address_name:'충남 천안시 동남구 각원사길 153',
            road_address_name:'안서동 145-1',
            phone:'041-556-5182',
            LatLng: new kakao.maps.LatLng(36.831945380279656,127.18680548929983)
        },
        {
            title:'초롱박가든',
            address_name:'충남 천안시 동남구 광덕면 죽계2길 5-2',
            road_address_name:'광덕리 558',
            phone:'041-568-5292',
            LatLng: new kakao.maps.LatLng(36.67185310349236,127.04645121012182)
        },
        {
            title:'천안본가장어',
            address_name:'충남 천안시 동남구 다가말4길 28',
            road_address_name:'다가동 409-5',
            phone:'041-577-1592',
            LatLng: new kakao.maps.LatLng(36.798296057996126,127.13805395967391)
        },
        {
            title:'봉평옹심이메밀칼국수 ',
            address_name:'충남 천안시 동남구 대흥로 215',
            road_address_name:'대흥동 134',
            phone:'041-577-3889',
            LatLng: new kakao.maps.LatLng(36.82329954750962,127.18372677109525)
        },
        {
            title:'달식당',
            address_name:'충남 천안시 동남구 대흥로 215',
            road_address_name:'대흥동 134',
            phone:'041-557-2266',
            LatLng: new kakao.maps.LatLng(36.82329954750962,127.18372677109525)
        },
        {
            title:'평택족발',
            address_name:'충남 천안시 동남구 망향로 45-40',
            road_address_name:'신부동 191-1',
            phone:'041-563-7060',
            LatLng: new kakao.maps.LatLng(36.82852199207124,127.16686695107605)
        },
        {
            title:'북경중화요리',
            address_name:'충남 천안시 동남구 신부1길 6',
            road_address_name:'신부동 80-8',
            phone:'041-554-1585',
            LatLng: new kakao.maps.LatLng(36.81420119392472,127.15925975569812)
        },
        {
            title:'능수정',
            address_name:'충남 천안시 동남구 청수4로 8',
            road_address_name:'청당동 535',
            phone:'041-520-6392',
            LatLng: new kakao.maps.LatLng(36.78243272478796,127.15289811823378)
        },
        {
            title:'이고집만두',
            address_name:'충남 천안시 동남구 태조산길 258',
            road_address_name:'유량동 8-3',
            phone:'041-567-2027',
            LatLng: new kakao.maps.LatLng(36.82052075918559,127.18818994932457)
        },
        {
            title:'두목고기',
            address_name:'충남 천안시 서북구 불당5길 15',
            road_address_name:'불당동 1170',
            phone:'041-565-9293',
            LatLng: new kakao.maps.LatLng(36.8027630839144,127.10924566333655)
        },
        {
            title:'박종식스시',
            address_name:'충남 천안시 서북구 미라7길 13 107호',
            road_address_name:'쌍용동 1115',
            phone:'010-8545-4782',
            LatLng: new kakao.maps.LatLng(36.802696042533654,127.12936632206842)
        },
        {
            title:'봉평장터',
            address_name:'충남 천안시 동남구 향교1길 140',
            road_address_name:'유량동 397-1',
            phone:'041-556-6272',
            LatLng: new kakao.maps.LatLng(36.81251609934809,127.17095638649369)
        },
        {
            title:'소사벌소한마리',
            address_name:'충남 천안시 서북구 성정두정로 14 2층',
            road_address_name:'성정동 1453',
            phone:'0507-1400-3395',
            LatLng: new kakao.maps.LatLng(36.82682137384658,127.14131547632553)
        }
    ];

    // 한식 마커가 표시될 좌표 배열입니다
    var KorPositions = [
        {
            title:'한신우동 백석대점',
            address_name:'충남 천안시 동남구 문암4길 10-13',
            road_address_name:'안서동 379-26',
            phone:'041-551-3353',
            LatLng: new kakao.maps.LatLng(36.84149901214754,127.1809091902998)
        },
        {
            title:'서울뚝배기',
            address_name:'충남 천안시 동남구 문암로 90',
            road_address_name:'안서동 406',
            phone:'041-569-3004',
            LatLng: new kakao.maps.LatLng(36.842130927153434,127.18252062578651)
        },
        {
            title:'큰맘할매순대국 천안백석대점',
            address_name:'충남 천안시 동남구 문암로 69',
            road_address_name:'안서동 386',
            phone:'041-562-2244',
            LatLng: new kakao.maps.LatLng(36.84117112017317,127.18083666634271)
        },
        {
            title:'동궁찜닭 백석대점',
            address_name:'충남 천안시 동남구 문암로 69',
            road_address_name:'안서동 386',
            phone:'041-522-4589',
            LatLng: new kakao.maps.LatLng(36.841045218152175,127.1806704445635)
        },
        {
            title:'쪼다쪼림닭',
            address_name:'충남 천안시 동남구 문암로 74-4',
            road_address_name:'안서동 384',
            phone:'041-522-4589',
            LatLng: new kakao.maps.LatLng(36.8408135187273,127.18133808334566)
        },
        {
            title:'이모네식당',
            address_name:'충남 천안시 동남구 문암로 72',
            road_address_name:'안서동 385-13',
            phone:'041-622-2111',
            LatLng: new kakao.maps.LatLng(36.84108406814128,127.18119521905236)
        },
        {
            title:'오래오래',
            address_name:'충남 천안시 동남구 문암2길 10-11',
            road_address_name:'안서동 335-1',
            phone:'041-557-3363',
            LatLng: new kakao.maps.LatLng(36.8381769913777,127.17768612189838)
        }
    ];

    // 양식 마커가 표시될 좌표 배열입니다
    var YangPositions = [
        {
            title:'타임즈핫도그 천안백석대점',
            address_name:'충남 천안시 동남구 문암로 68-4 1, 2층',
            road_address_name:'안서동 384-1',
            phone:'0507-1337-0846',
            LatLng: new kakao.maps.LatLng(36.84055807728798,127.18102805387318)
        },
        {
            title:'샐러핏',
            address_name:'충남 천안시 동남구 문암로 43 1동',
            road_address_name:'안서동 350-6',
            phone:'041-522-8333',
            LatLng: new kakao.maps.LatLng(36.83966792724263,127.17855057351002)
        },
        {
            title:'맘스터치 천안백석대점',
            address_name:'충남 천안시 동남구 문암로 74-4',
            road_address_name:'안서동 384',
            phone:'041-568-9288',
            LatLng: new kakao.maps.LatLng(36.8408135187273,127.18133808334566)
        },
        {
            title:'이삭토스트 천안백석대점',
            address_name:'충남 천안시 동남구 문암로 70 ',
            road_address_name:'안서동 385-4',
            phone:'041-523-2322',
            LatLng: new kakao.maps.LatLng(36.84077432813851,127.1810375324759)
        },
        {
            title:'썬오브비앤피',
            address_name:'충남 천안시 동남구 문암로 80',
            road_address_name:'안서동 382',
            phone:'041-566-2226',
            LatLng: new kakao.maps.LatLng(36.8415733090999,127.1818242031995)
        }
    ];

    // 중식 마커가 표시될 좌표 배열입니다
    var ChaPositions = [
    {
            title:'춘리마라캉 백석대점',
            address_name:'충남 천안시 동남구 문암로 80 101 호',
            road_address_name:'안서동 382',
            phone:'041-415-2116',
            LatLng: new kakao.maps.LatLng(36.8415733090999,127.1818242031995)
        },
        {
            title:'짜우',
            address_name:'충남 천안시 동남구 문암로 63 1층',
            road_address_name:'안서동 371-21',
            phone:'041-552-0401',
            LatLng: new kakao.maps.LatLng(36.84062055139819,127.18023893899606)
        },
        {
            title:'이런이궈 백석대점',
            address_name:'충남 천안시 동남구 문암4길 10-18 3층',
            road_address_name:'안서동 379-37',
            phone:'0507-1388-8775',
            LatLng: new kakao.maps.LatLng(36.84132597326501,127.18092672065013)
        }
    ];

    // 일식 마커가 표시될 좌표 배열입니다
    var JpPositions = [
    {
            title:'자라쿠라멘',
            address_name:'충남 천안시 동남구 문암로 83',
            road_address_name:'안서동 379-38',
            phone:'0507-1395-2591',
            LatLng: new kakao.maps.LatLng(36.84205627914206,127.18183880018523)
        },
        {
            title:'희락',
            address_name:'충남 천안시 동남구 문암1길 68',
            road_address_name:'안서동 365-3',
            phone:'0507-1359-5039',
            LatLng: new kakao.maps.LatLng(36.83894925847838,127.17706906855283)
        }
    ];

    // 분식 마커가 표시될 좌표 배열입니다
    var BoonPositions = [
    {
            title:'봉구스 밥버거',
            address_name:'충남 천안시 동남구 문암로 83',
            road_address_name:'안서동 379-38',
            phone:'010-5663-7052',
            LatLng: new kakao.maps.LatLng(36.84208142767236,127.18189267407737)
        },
        {
            title:'캠퍼스컵밥',
            address_name:'충남 천안시 동남구 문암로 77',
            road_address_name:'안서동 380-8',
            phone:'070-8287-2797',
            LatLng: new kakao.maps.LatLng(36.84164604805056,127.18139834755061)
        },
        {
            title:'도리돈밥',
            address_name:'충남 천안시 동남구 문암로 69',
            road_address_name:'안서동 386',
            phone:'없음',
            LatLng: new kakao.maps.LatLng(36.841131655793106,127.1807154926324)
        },
        {
            title:'용우동',
            address_name:'충남 천안시 동남구 문암로 70 1층',
            road_address_name:'안서동 385-4',
            phone:'041-554-0208',
            LatLng: new kakao.maps.LatLng(36.840940103605924,127.18105586107707)
        },
        {
            title:'청년다방',
            address_name:'충남 천안시 동남구 문암로 65',
            road_address_name:'안서동 386-8',
            phone:'041-566-8185',
            LatLng: new kakao.maps.LatLng(36.840832878169564,127.18045917562321)
        },
        {
            title:'국수나무',
            address_name:'충남 천안시 동남구 문암로 70',
            road_address_name:'안서동 385-4',
            phone:'0507-1390-6623',
            LatLng: new kakao.maps.LatLng(36.8409437011847,127.18106035402056)
        },
        {
            title:'지지고',
            address_name:'충남 천안시 동남구 문암로 70',
            road_address_name:'안서동 385-4',
            phone:'041-556-6999',
            LatLng: new kakao.maps.LatLng(36.8409437011847,127.18106035402056)
        },
        {
            title:'김밥시대',
            address_name:'충남 천안시 동남구 문암로 65',
            road_address_name:'안서동 386-8',
            phone:'041-523-7979',
            LatLng: new kakao.maps.LatLng(36.84078243006416,127.18045008818503)
        },
        {
            title:'천원국수',
            address_name:'충남 천안시 동남구 문암로 66',
            road_address_name:'안서동 387-4',
            phone:'041-554-0965',
            LatLng: new kakao.maps.LatLng(36.840587294676695,127.18077699398884)
        }
    ];

    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35); 
    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    var jangMarkers=[];
    var korMarkers=[];
    var yangMarkers=[];
    var chaMarkers=[];
    var jpMarkers=[];
    var boonMarkers=[];

    createJangMarkers();
    createKorMarkers();
    createYangMarkers();
    createChaMarkers();
    createJpMarkers();
    createBoonMarkers();



    // 장애편의 마커를 생성하고 장애편의 마커 배열에 추가하는 함수입니다
    function createJangMarkers() {
    
        for (var i = 0; i < JangPositions.length; i++) {  
            
            var marker = new kakao.maps.Marker({
                map: map,
                position: JangPositions[i].LatLng, // 마커를 표시할 위치
                title : JangPositions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage, // 마커 이미지 
                clickable: true
            });
            (function(marker, JangPositions) {
                kakao.maps.event.addListener(marker, 'click', function() {
                    displayPlaceInfo(JangPositions);
                });
            })(marker, JangPositions[i]);

            // 생성된 마커를 장애편의 마커 배열에 추가합니다
        }     
    }

    // 장애편의 마커들의 지도 표시 여부를 설정하는 함수입니다
    function setJangMarkers() {        
        for (var i = 0; i < jangMarkers.length; i++) {
            jangMarkers[i].setMap(map);

        }        
    }

    // 한식 마커를 생성하고 한식 마커 배열에 추가하는 함수입니다
    function createKorMarkers() {
        for (var i = 0; i < KorPositions.length; i++) {

            var marker = new kakao.maps.Marker({
                position: KorPositions[i].LatLng, // 마커를 표시할 위치
                title : KorPositions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage, // 마커 이미지 
                clickable : true
            });
            (function(marker, KorPositions) {
                kakao.maps.event.addListener(marker, 'click', function() {
                    displayPlaceInfo(KorPositions);
                });
            })(marker, KorPositions[i]);       

            // 생성된 마커를 한식 마커 배열에 추가합니다
            korMarkers.push(marker);    
        }        
    }


    // 한식 마커들의 지도 표시 여부를 설정하는 함수입니다
    function setKorMarkers(map) {        
        for (var i = 0; i < korMarkers.length; i++) {  
            korMarkers[i].setMap(map);
        }        
    }

    // 양식 마커를 생성하고 양식 마커 배열에 추가하는 함수입니다
    function createYangMarkers() {
        for (var i = 0; i < YangPositions.length; i++) {
        
            var marker = new kakao.maps.Marker({
                position: YangPositions[i].LatLng, // 마커를 표시할 위치
                title : YangPositions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage, // 마커 이미지
                clickable : true 
            });
            (function(marker, YangPositions) {
                kakao.maps.event.addListener(marker, 'click', function() {
                    displayPlaceInfo(YangPositions);
                });
            })(marker, YangPositions[i]);  

            // 생성된 마커를 주차장 마커 배열에 추가합니다
            yangMarkers.push(marker);        
        }
    }
 

    // 양식 마커들의 지도 표시 여부를 설정하는 함수입니다
    function setYangMarkers(map) {        
        for (var i = 0; i < yangMarkers.length; i++) {  
            yangMarkers[i].setMap(map);
        }        
    }
    // 중식 마커를 생성하고 중식 마커 배열에 추가하는 함수입니다
    function createChaMarkers() {
        for (var i = 0; i < ChaPositions.length; i++) {
        
            var marker = new kakao.maps.Marker({
                position: ChaPositions[i].LatLng, // 마커를 표시할 위치
                title : ChaPositions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage, // 마커 이미지
                clickable : true
            });
            (function(marker, ChaPositions) {
                kakao.maps.event.addListener(marker, 'click', function() {
                    displayPlaceInfo(ChaPositions);
                });
            })(marker, ChaPositions[i]);  

            // 생성된 마커를 주차장 마커 배열에 추가합니다
            chaMarkers.push(marker);        
        }                
    }


    // 중식 마커들의 지도 표시 여부를 설정하는 함수입니다
    function setChaMarkers(map) {        
        for (var i = 0; i < chaMarkers.length; i++) {  
            chaMarkers[i].setMap(map);
        }        
    }

    // 일식 마커를 생성하고 일식 마커 배열에 추가하는 함수입니다
    function createJpMarkers() {
        for (var i = 0; i < JpPositions.length; i++) {
        
            var marker = new kakao.maps.Marker({
                position: JpPositions[i].LatLng, // 마커를 표시할 위치
                title : JpPositions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage, // 마커 이미지 
                clickable : true
            });
            (function(marker, JpPositions) {
                kakao.maps.event.addListener(marker, 'click', function() {
                    displayPlaceInfo(JpPositions);
                });
            })(marker, JpPositions[i]);  

            // 생성된 마커를 일식 마커 배열에 추가합니다
            jpMarkers.push(marker);        
        }                
    }

    // 일식 마커들의 지도 표시 여부를 설정하는 함수입니다
    function setJpMarkers(map) {        
        for (var i = 0; i < jpMarkers.length; i++) {  
            jpMarkers[i].setMap(map);
        }
    }

    // 분식 마커를 생성하고 분식 마커 배열에 추가하는 함수입니다
    function createBoonMarkers() {
        for (var i = 0; i < BoonPositions.length; i++) {
        
            var marker = new kakao.maps.Marker({
                position: BoonPositions[i].LatLng, // 마커를 표시할 위치
                title : BoonPositions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image : markerImage, // 마커 이미지
                clickable : true
            });
            (function(marker, BoonPositions) {
                kakao.maps.event.addListener(marker, 'click', function() {
                    displayPlaceInfo(BoonPositions);
                });
            })(marker, BoonPositions[i]);  

            // 생성된 마커를 분식 마커 배열에 추가합니다
            boonMarkers.push(marker);        
        }                
    }

    // 분식 마커들의 지도 표시 여부를 설정하는 함수입니다
    function setBoonMarkers(map) {        
        for (var i = 0; i < boonMarkers.length; i++) {  
            boonMarkers[i].setMap(map);
        }
    }

    function changeMarker(type){
    
        var jangMenu = document.getElementById('JangMenu');
        var korMenu = document.getElementById('KorMenu');
        var yangMenu = document.getElementById('YangMenu');
        var chaMenu = document.getElementById('ChaMenu');
        var jpMenu = document.getElementById('JpMenu');
        var boonMenu = document.getElementById('BoonMenu');

        // 장애편의 카테고리가 클릭됐을 때
        if (type === 'Jang') {

            // 장애편의 카테고리를 선택된 스타일로 변경하고
            jangMenu.className = 'menu_selected';
            korMenu.className = '';
            yangMenu.className = '';
            chaMenu.className = '';
            jpMenu.className = '';
            boonMenu.className = '';

            // 장애편의 마커들만 지도에 표시하도록 설정합니다
            setJangMarkers(map);
            setKorMarkers(null);
            setYangMarkers(null);
            setChaMarkers(null);
            setJpMarkers(null);
            setBoonMarkers(null);

        } else if (type === 'Kor') { // 한식 카테고리가 클릭됐을 때
    
            // 한식 카테고리를 선택된 스타일로 변경하고
            jangMenu.className = '';
            korMenu.className = 'menu_selected';
            yangMenu.className = '';
            chaMenu.className = '';
            jpMenu.className = '';
            boonMenu.className = '';
        
            // 한식 마커들만 지도에 표시하도록 설정합니다
            setJangMarkers(null);
            setKorMarkers(map);
            setYangMarkers(null);
            setChaMarkers(null);
            setJpMarkers(null);
            setBoonMarkers(null);

        } else if (type === 'Yang') { // 양식 카테고리가 클릭됐을 때
     
            // 양식 카테고리를 선택된 스타일로 변경하고
            jangMenu.className = '';
            korMenu.className = '';
            yangMenu.className = 'menu_selected';
            chaMenu.className = '';
            jpMenu.className = '';
            boonMenu.className = '';
        
            // 양식 마커들만 지도에 표시하도록 설정합니다
            setJangMarkers(null);
            setKorMarkers(null);
            setYangMarkers(map);
            setChaMarkers(null);
            setJpMarkers(null);
            setBoonMarkers(null);

        } else if (type === 'Cha') { // 중식 카테고리가 클릭됐을 때
     
            // 중식 카테고리를 선택된 스타일로 변경하고
            jangMenu.className = '';
            korMenu.className = '';
            yangMenu.className = '';
            chaMenu.className = 'menu_selected';
            jpMenu.className = '';
            boonMenu.className = '';
 
            // 중식 마커들만 지도에 표시하도록 설정합니다
            setJangMarkers(null);
            setKorMarkers(null);
            setYangMarkers(null);
            setChaMarkers(map);
            setJpMarkers(null);
            setBoonMarkers(null);

        } else if (type === 'Jp') { // 일식 카테고리가 클릭됐을 때
     
            // 일식 카테고리를 선택된 스타일로 변경하고
            jangMenu.className = '';
            korMenu.className = '';
            yangMenu.className = '';
            chaMenu.className = '';
            jpMenu.className = 'menu_selected';
            boonMenu.className = '';

            // 일식 마커들만 지도에 표시하도록 설정합니다
            setJangMarkers(null);
            setKorMarkers(null);
            setYangMarkers(null);
            setChaMarkers(null);
            setJpMarkers(map);
            setBoonMarkers(null);

        } else if (type === 'Boon') { // 분식 카테고리가 클릭됐을 때
     
            // 분식 카테고리를 선택된 스타일로 변경하고
            jangMenu.className = '';
            korMenu.className = '';
            yangMenu.className = '';
            chaMenu.className = '';
            jpMenu.className = '';
            boonMenu.className = 'menu_selected';

            // 분식 마커들만 지도에 표시하도록 설정합니다
            setJangMarkers(null);
            setKorMarkers(null);
            setYangMarkers(null);
            setChaMarkers(null);
            setJpMarkers(null);
            setBoonMarkers(map);

        }
    } 
    var overlay=[]
    // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다
    var placeOverlay = new kakao.maps.CustomOverlay({zIndex:1}), 
        contentNode = document.createElement('div'), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다 
        markers = [], // 마커를 담을 배열입니다
        currCategory = ''; // 현재 선택된 카테고리를 가지고 있을 변수입니다
    // 커스텀 오버레이 컨텐츠를 설정합니다
    placeOverlay.setContent(contentNode);
    // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다 
    contentNode.className = 'placeinfo_wrap';

    // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
    // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다 
    //addEventHandle(contentNode, 'mousedown', kakao.maps.event.preventMap);
    //addEventHandle(contentNode, 'touchstart', kakao.maps.event.preventMap);

    // 장애편의 오버레이
    function displayPlaceInfo(JangPositions) {
        var content = '<div class="placeinfo">' +
                        '   <a class="title" href="' + '" target="_blank" title="' + JangPositions.title + '">' + JangPositions.title + '</a>';   

        if (JangPositions.road_address_name) {
            content += '    <span title="' + JangPositions.road_address_name + '">' + JangPositions.road_address_name + '</span>' +
                        '  <span class="jibun" title="' + JangPositions.address_name + '">(지번 : ' + JangPositions.address_name + ')</span>';
        }  else {
            content += '    <span title="' + JangPositions.address_name + '">' + JangPositions.address_name + '</span>';
        }                
    
        content += '    <span class="tel">' + JangPositions.phone + '</span>' + 
                    '</div>' + 
                    '<div class="after"></div>';

        contentNode.innerHTML = content;
        placeOverlay.setPosition(JangPositions.LatLng);
        placeOverlay.setMap(map);
    }
    // 한식 오버레이
    function displayPlaceInfo(KorPositions) {
        var content = '<div class="placeinfo">' +
                        '   <a class="title" href="' + '" target="_blank" title="' + KorPositions.title + '">' + KorPositions.title + '</a>';   

        if (KorPositions.road_address_name) {
            content += '    <span title="' + KorPositions.road_address_name + '">' + KorPositions.road_address_name + '</span>' +
                        '  <span class="jibun" title="' + KorPositions.address_name + '">(지번 : ' + KorPositions.address_name + ')</span>';
        }  else {
            content += '    <span title="' + KorPositions.address_name + '">' + KorPositions.address_name + '</span>';
        }                
    
        content += '    <span class="tel">' + KorPositions.phone + '</span>' + 
                    '</div>' + 
                    '<div class="after"></div>';

        contentNode.innerHTML = content;
        placeOverlay.setPosition(KorPositions.LatLng);
        placeOverlay.setMap(map);
    }
    // 양식 오버레이
    function JangdisplayPlaceInfo(YangPositions) {
        var content = '<div class="placeinfo">' +
                        '   <a class="title" href="' + '" target="_blank" title="' + YangPositions.title + '">' + YangPositions.title + '</a>';   

        if (YangPositions.road_address_name) {
            content += '    <span title="' + YangPositions.road_address_name + '">' + YangPositions.road_address_name + '</span>' +
                        '  <span class="jibun" title="' + YangPositions.address_name + '">(지번 : ' + YangPositions.address_name + ')</span>';
        }  else {
            content += '    <span title="' + YangPositions.address_name + '">' + YangPositions.address_name + '</span>';
        }                
    
        content += '    <span class="tel">' + YangPositions.phone + '</span>' + 
                    '</div>' + 
                    '<div class="after"></div>';

        contentNode.innerHTML = content;
        placeOverlay.setPosition(YangPositions.LatLng);
        placeOverlay.setMap(map);
    }
    //중식 오버레이
    function JangdisplayPlaceInfo(ChaPositions) {
        var content = '<div class="placeinfo">' +
                        '   <a class="title" href="' + '" target="_blank" title="' + ChaPositions.title + '">' + ChaPositions.title + '</a>';   

        if (ChaPositions.road_address_name) {
            content += '    <span title="' + ChaPositions.road_address_name + '">' + ChaPositions.road_address_name + '</span>' +
                        '  <span class="jibun" title="' + ChaPositions.address_name + '">(지번 : ' + ChaPositions.address_name + ')</span>';
        }  else {
            content += '    <span title="' + ChaPositions.address_name + '">' + ChaPositions.address_name + '</span>';
        }                
    
        content += '    <span class="tel">' + ChaPositions.phone + '</span>' + 
                    '</div>' + 
                    '<div class="after"></div>';

        contentNode.innerHTML = content;
        placeOverlay.setPosition(ChaPositions.LatLng);
        placeOverlay.setMap(map);
    }
    // 일식 오버레이
    function JangdisplayPlaceInfo(JpPositions) {
        var content = '<div class="placeinfo">' +
                        '   <a class="title" href="' + '" target="_blank" title="' + JpPositions.title + '">' + JpPositions.title + '</a>';   

        if (JpPositions.road_address_name) {
            content += '    <span title="' + JpPositions.road_address_name + '">' + JpPositions.road_address_name + '</span>' +
                        '  <span class="jibun" title="' + JpPositions.address_name + '">(지번 : ' + JpPositions.address_name + ')</span>';
        }  else {
            content += '    <span title="' + JpPositions.address_name + '">' + JpPositions.address_name + '</span>';
        }                
    
        content += '    <span class="tel">' + JpPositions.phone + '</span>' + 
                    '</div>' + 
                    '<div class="after"></div>';

        contentNode.innerHTML = content;
        placeOverlay.setPosition(JpPositions.LatLng);
        placeOverlay.setMap(map);
    }
    //분식
    function JangdisplayPlaceInfo(BoonPositions) {
        var content = '<div class="placeinfo">' +
                        '   <a class="title" href="' + '" target="_blank" title="' + BoonPositions.title + '">' + BoonPositions.title + '</a>';   

        if (BoonPositions.road_address_name) {
            content += '    <span title="' + BoonPositions.road_address_name + '">' + BoonPositions.road_address_name + '</span>' +
                        '  <span class="jibun" title="' + BoonPositions.address_name + '">(지번 : ' + BoonPositions.address_name + ')</span>';
        }  else {
            content += '    <span title="' + BoonPositions.address_name + '">' + BoonPositions.address_name + '</span>';
        }                
    
        content += '    <span class="tel">' + BoonPositions.phone + '</span>' + 
                    '</div>' + 
                    '<div class="after"></div>';

        contentNode.innerHTML = content;
        placeOverlay.setPosition(BoonPositions.LatLng);
        placeOverlay.setMap(map);
    }

    function closeOverlay() {
        overlay.setMap(null);     
    }
    function openOverlay(map,overlay){
        overlay.setMap(map);
    }