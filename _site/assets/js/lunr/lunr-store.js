var store = [{
        "title": "Database_1",
        "excerpt":"본 글은 개인 공부용으로서 스크랩/펌/복사를 허용하지 않습니다. emp dept 테이블에 대하여 차수(degree) 8 3 -&gt; desc 테이블명; 기수(대응수, 카디널리티) 14 4 -&gt; select count(*) from 테이블명; 으로 개수만 보면 됨 1. 사원, 부서테이블의 경우의 수를 보이시오(카티션 프로덕트) select * from emp, dept; EMPNO ENAME JOB MGR HIREDATE SAL COMM DEPTNO...","categories": ["SQL"],
        "tags": [],
        "url": "https://ictechgy.github.io/sql/DB_1/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Database2",
        "excerpt":"본 글은 개인 공부용으로서 스크랩/펌/복사를 허용하지 않습니다. ** 함수 (function) 내장함수 (단일행함수) - 하나의 행에 대해 하나의 결과 값을 return (ex. lower, upper, nvl …) 집단함수 (다중행함수, 그룹함수) - 여러 행에 대해 하나의 결과 값을 return (ex. sum, max, min, count, avg …) ** 내장함수 1) 숫자함수 abs (열이름) -...","categories": ["SQL"],
        "tags": [],
        "url": "https://ictechgy.github.io/sql/DB_2/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day1",
        "excerpt":"D드라이브에 내 이름으로 폴더 하나 생성. 1_압축푼거 와 2_직접설치 디렉토리 두개를 추가한다. 주 수업은 1_압축푼거 서브로는 2_직접설치 → TUI 설치 예정 2개로 실습을 하는 경우에 또 사용 할 것 CentOS 7.5로 수업 할 것. D드라이브에 압축푼 OS파일과 직접 설치한 OS파일을 둘 것 C드라이브에는 ISO파일과 OS압축파일 원본을 둘 것 ISO파일은 용량이...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day1/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day10",
        "excerpt":"NFS서비스와 RPCbind에 대해 배웠었으며 /etc/exports를 보고 있었음 해당 파일은 NFS를 허용 할 클라이언트를 작성할 수 있는 파일이다. Network File System → 서버의 리소스를 클라이언트가 마운트하여 자기것처럼 쓸 수 있음 NFS를 쓰려면 rpcbind(Remote Procedure Call 원격 절차 호출. 또는 portmap이라고 함)패키지가 꼭 필요하다. RPC는 111번 포트를 쓰는데, NFS를 쓰려는 클라이언트가 접속을...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day10/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day11",
        "excerpt":"실습 풀이 Client머신에서 NFS Server와 NFS Client를 모두 구동시키고 연결하기. 장치로 1GB SCSI HDD를 추가하고 이 장치의 파티션을 100, 200, 300, 400Mbyte로 나눈다. 그 이후에 100Mbyte의 파티션을 마운트한 뒤에 클라이언트 본인에게 NFS로 제공하기 /etc/fstab 으로 자동마운트 설정 및 /etc/exports로 NFS설정. 먼저 Edit this virtual machine으로 장치 1GB를 추가한다. Client머신에 root로...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day11/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day12",
        "excerpt":"실습 Client머신에서 실습. HDD 1GB(SCSI) 추가한 뒤 파티션을 100, 200, 300, 400Mbyte로 나눈다. 파일시스템을 만든 뒤 마운트를 진행한다. nfs server 입장에서는 /etc/exports 설정을 통해 300Mbyte의 용량을 지니고 있는 마운트포인트 디렉토리를 nfs 서비스로 제공한다. (네트워크 대역방식으로. 옵션은 자유롭게) /etc/fstab 설정을 통해 auto mount를 진행한다. → systemctl restart nfs.service 필요할 것 nfs...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day12/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day13",
        "excerpt":"실습 Server머신에서 systemctl enable nfs.service 를 하였음에도 불구하고 재부팅한 후에 systemctl is-active nfs.service 를 하면 unknown으로 나온다. 왜지 Client머신에서는 systemctl enable autofs.service하면 재부팅해도 autofs서비스 켜져있는데 → 말이 unknown이지 사실은 실행되어있는 상태이다. Server머신에서 reboot한 상태에서 systemctl is-active nfs.service하면 unknown이긴 한데, Client머신에서 df -h 를 하면 nfs서비스에 대한 연결은 되어있는 것으로 나온다.(Server머신을...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day13/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day14",
        "excerpt":"DNS(Domain Name System) 도메인 네임 공간 인터넷 공간에서 사용되는 도메인의 계층적 구조 공간을 의미(Tree구조) 디렉토리나 폴더의 계층적 구조처럼 도메인도 계층적 구조로 관리 구조는 점(dot)으로 구분되고 최상위로부터 순차적으로 나타냄 하위 호스트 레이블부터 시작하여 루트 호스트까지 경로에 위치한 모든 호스트들의 레이블에 점을 붙여서 연결 각 레이블이 점으로 연결되어 도메인 네임을 설정 예를...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day14/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day15",
        "excerpt":"/etc/named.rfc1912.zones에서 zone “kgitbank.co.kr” IN { type master; file “kgitbank.for.zone”; allow-update { none; }; }; 했을 때 이 zone에 대한 zone파일 정의 forward zone 정방향 영역 정의 준비물 vi 명령어로 새 문서 편집 → :se nu 1줄 : $TTL 초(숫자 또는 문자) ; $TTL 초 → Time To Live를 의미하며 bind에서...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day15/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day16",
        "excerpt":"인터넷에 내 이름으로 도메인입력을 진행해보자 http://www.jinhong.com 도메인등록이 되어있을 수도 있고 안되어있을 수도 있다. → 되어있긴 하다. 리눅스에서 내 이름의 도메인을 만들어보자. 즉, 이미 인터넷 상에서는 내 도메인에 대해 네임서버 및 여러가지 등이 구축된 상황이지만.. 내 리눅스 서버상에 내 이름의 도메인에 대한 정보를 추가한 뒤, 찾아가는 네임서버 순서에 나 스스로를 최우선으로...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day16/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day17",
        "excerpt":"아파치 웹서버 패키지 → httpd 패키지. rpm -qa | grep httpd 로 패키지 설치 유무 판별해보자. 존재하지 않는다. 패키지명은 httpd로 시작하므로 yum install httpd* 로 설치하자 4패키지에 의존성패키지 7개를 포함하여 총 11개를 설치 rpm -qa | grep httpd | nl 로 4개의 패키지가 설치된 것을 확인하자 apache의 설정파일은 /etc/httpd/conf/httpd.conf이다. vi...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day17/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day18",
        "excerpt":"DNS 셋팅해주자. systemctl restart named.service 를 해서 DNS 네임서버를 실행 vi /etc/resolv.conf 로 내 컴퓨터가 어떤 페이지를 찾아갈 때 나 스스로에게 먼저 질의하도록 설정 그리고 웹서버 또한 가동시켜주자. systemctl restart httpd.service → 파이어폭스에서 내 도메인으로 내가 만든 페이지 잘 나온다. ⇒ 윈도우 익스플로러에서 키는건.. 윈도우의 DNS는 kt로 잡혀있기때문에 당연히 안됨...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day18/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day19",
        "excerpt":"DataBase 체계화된 데이터의 모임 작성된 목록으로써 여러 응용시스템들의 통합된 정보들을 저장하여 운영할 수 있는 공용 데이터(자료)들의 묶음 자료 현실 세계에서 관찰이나 측정을 통해 수집한 단순한 사실(가공되지 않은 상태) 정보 의사 결정에 도움을 줄 수 있는 유용한 형태(가공해서 얻은 결과물) → 공중전화에 있는 전화번호부나 노래방에 있는 노래방책도 데이터베이스라고 볼 수 있다....","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day19/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day2",
        "excerpt":"SELinux(Secure Enhanced Linux) 보안이 강화된 리눅스 리눅스의 보안을 강화해주는 보안 강화 커널이고 어플리케이션 취약점으로 인한 해킹을 방지해주는 핵심 구성 요소 다시 말하면, 잘못된 설정이나 프로그램의 보안 버그로 인해 시스템이 공격당해도 시스템과 데이터를 보호하고 2차 피해를 막기 위함 사용했을 때 좋은점은, 사전 정의된 접근 통제 정책 탑재 “Deny All, Some Permit”...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day2/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day20",
        "excerpt":"systemctl is-active mariadb.service로 서비스 확인 뒤 systemctl restart mariadb.service로 서비스 시작 mysql -u root -p mysql 로 mysql데이터베이스 접속 및 itbank비밀번호 입력 → 어제 mysql 데이터베이스의 user table쪽에서 root계정에 대해 비밀번호를 생성해주었었음. 어제 mysql 데이터베이스의 user table쪽에서 ‘saram’이라는 user를 등록해주었었다. → insert into user (host, user, password) values (‘localhost’, ‘saram’,...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day20/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day3",
        "excerpt":"server머신에서 관리자계정으로 접속. 네트워크 설정 진행 할 것 네트워크 설정(bridged) 1) GUI 그래픽 환경 → 관리자로 로그인 → 프로그램 → 시스템 도구 → 설정 → 네트워크 → 톱니바퀴(설정) → 학원컴퓨터 IP주소는 현재 아래와 같다. 현재는 VMware의 리눅스 IP가 자동으로 잡혀있는 상태이다.(윈도우 또한 마찬가지일 것) 집에서는 윈도우하고만 겹치지 않도록 IPv4 주소를...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day3/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day4",
        "excerpt":"ping (Packet Internet Groper) 네트워크가 정상적으로 동작중인지 확인 특정 호스트로 ICMP(Internet Control Message Protocol) 에코(echo-출력)메시지를 이용하여 원격 호스트가 다시 로컬 호스트로 응답하도록 함 즉! 네트워크 연결을 확인할 수 있는 명령어로 서로 확인여부와 패킷을 보내고 받는 시간이 출력되므로 장애여부 판단가능 사용형식 ping [option] IP주소(또는 Domain) ‘ping 내IP주소’ 입력해보자. ifconfig | head...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day4/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day5",
        "excerpt":"텔넷 telnet(윈도우 → 리눅스) telnet을 쓰기 위해 리눅스에서 해당 패키지(telnet)를 설치해주었고, 방화벽에서 포트포워딩을 진행하였으며(서비스항목체크) 해당 서비스항목을 시작해주었다.(systemctl restart telnet.socket) 방화벽설정을 런타임에서 했기때문에 재부팅한 후에는 다시 서비스 포트를 열어줘야 한다. 터미널창에서 firewall-config 입력하여 방화벽 창을 연다.(CentOS 6.x 이하에서는 system-config-firewall 또는 system-config-firewall-tui) public에서 아래로 스크롤 내려서 telnet 서비스 항목을 체크한다. 이후에는 systemctl...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day5/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day6",
        "excerpt":"scp 실습 준비물 Server 관리자로 로그인 후 /test/ssh_down 디렉터리와 /test/ssh_up 디렉터리를 생성 /test/ssh_down 디렉터리 하위에 testfile숫자 파일을 생성 (이 때, 숫자는 자신의 IP주소에 4번째 자리를 입력) Client 일반 사용자로 로그인 후 자신의 홈 디렉터리 하위에 test숫자file 파일을 생성 (이 때, 숫자는 자신의 IP주소에 4번째 자리를 입력) ————————————————————————— 위 설정이 다...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day6/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day7",
        "excerpt":"killall -9 Xvnc 로 Xvnc를 강제종료시킨 경우 세션값은 남아있는데 이러면 다음 vncserver명령어를 쳤을 경우 다른 세션값을 부여받게 된다. 이전의 세션값을 쓰고 싶다면 직접 /tmp에서 이전 세션에 대한 파일들을 지워주거나 ‘vncserver -kill :이전세션값’ 을 입력하면 남아있던 세션파일들을 알아서 지워준다. 방화벽설정을 명령어로 해보자(TUI) 방화벽 설정 firewall-cmd(명령어) → 기존에 GUI를 쓰던 것은 firewall-config...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day7/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day8",
        "excerpt":"xferlog 분석 → cat /var/log/xferlog ⇒ 내 서버를 FTP서버로 만들었을 때 접속한 클라이언트들이 무엇을 했는지 볼 수 있는 로그파일 Thu Jul 19 14:15:15 2018 1 ::ffff:192.168.52.20 0 /var/ftp/a.txt a _ i r itbank ftp 0 * c Thu Jul 19 14:15:18 2018 1 ::ffff:192.168.52.20 1148498 /var/ftp/b.bmp b _ i a...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day8/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux2_day9",
        "excerpt":"HDD 하드디스크드라이브를 SCSI타입으로 1GB하나 추가한다. 해당 디스크를 5개의 파티션으로 분할한다(각각 100, 200, 200, 300, 200Mbyte) 각각의 파티션들을 xfs 파일시스템으로 포맷한 후 자동마운트시킨다. /kgitbank 하위의 5개 디렉토리에 각각 자동마운트 시킨 뒤에 마운트된 각각의 디렉토리 하위에 파일 및 디렉토리를 만들고 reboot 후 확인해보기 (일반마운트라면 재부팅 후에는 마운트가 자동해제가 되고 마운트상태에서 만들었던 파일들을...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux2_day9/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day1",
        "excerpt":"Client - 서비스를 제공받음. 운영체제로는 windows와 mac 등이 있다. 일반적으로는 대부분 윈도우 운영체제를 사용한다. Server - 서비스를 제공함. 운영체제로는 Unix(서버의 조상님 - 부모), Linux(유닉스로부터 탄생 - 자식), windows server 등이 있다. 클라이언트 운영체제와는 다르게 삼파전양상이 보인다. 서버는 보통 대형컴퓨터와 고가의 장비, 소프트웨어를 사용해야했다. 따라서 대기업에서 주로 사용하였고 중소기업이나 개인은 사용하기...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day1/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day10",
        "excerpt":"VMware 껐다가 다시 키니 사용자 계정을 생성한 것들이 나온다. 학원에서도, 집에서도 내가 만들었던 계정들 목록이 보인다. comment를 만들지 않아도 뜨는건지 아니면 꼭 생성해야 뜨는건지.(아니면 코멘트 생성하면 해당 코멘트명으로 계정명이 보이는지) itbank라는 계정은 dust라는 코멘트를 가지고 있는데 VMware에서 로그인 할 때 dust라는 이름으로 보인다.. 실습 /etc/skel 디렉터리가 기본 skel 디렉터리임 별도로...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day10/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day11",
        "excerpt":"내 예상이 맞는 듯 하다. VMware에서 계정 뜰 때 코멘트로 뜨는 걸로 보임. 코멘트가 없을 시 계정명으로 뜸. 다만 로그인은 계정명으로만 가능(따라서 코멘트는 중복가능할 것이고 그러면 같은 이름으로 보이는 계정을 많이 만들기가 가능 할 것으로 보임) 사용자 삭제 userdel 계정명 tail -20 /etc/passwd 으로 사용자 계정을 출력하고 맨 마지막에 있는...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day11/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day12",
        "excerpt":"사용자 계정과 그룹 실습 작업 후의 결과내용 User : battlegrounds UID : 2018 Group : leagueoflegends(GID는 자유롭게) → GID는 뭐가되든 상관없고 그냥 groups에 포함시키기만 하면 되는 듯 SHELL : shell은 자유롭게 HOME : /over/watch SKEL : /fifa/online4 COMMENT : suddenattack Auto Creating Directory : starcraft Auto Creating File : .dungeon_fighter...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day12/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day13",
        "excerpt":"실습 /bankup/grub.cfg 파일을 /home/itbank 홈 디렉토리 하위에 복사한 후 변경 기존의 권한을 numeric으로 변경 → r w - - w - - w x symbolic으로 변경 → - w x r - x r w - numeric으로 변경 → r - x - w - r w - symbolic으로 변경...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day13/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day14",
        "excerpt":"사용자 계정의 홈 디렉토리 하위인 /home/itbank 밑에 파일들을 두었었는데 이는 VMware에서 사용자계정의 바탕화면에 파일을 두는 것과 같음 → 그러면 어쨌든 사용자계정의 홈 디렉토리 접근 x권한을 두지 않으면 VMware로도 접속이 불가능 할 것으로 보인다. 권한 실습! 소유권 - root:root, root:itbank, itbank:root, itbank:itbank 허가권 - 755, 570, 375, 455, 001, 010, 234,...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day14/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day15",
        "excerpt":"itbank 홈디렉토리만 삭제했다가 다시 만들어보기 cd ~ → /root 로 이동 rm -rf /home/itbank → 커맨드라인이 저 안에 있는 상태로 삭제하면? 커맨드라인이 /home/itbank 안에 있는 상태에서 rm -rf /home/itbank 해봤는데 삭제는 된다. 다만 커맨드라인은 그대로 있길래 처음에 삭제 안된건줄 알고 cd .. 으로 상위로 간 다음에 ls -l 쳤는데 itbank...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day15/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day16",
        "excerpt":"실습 아래에 주어진 예제를 작업해보세요 (조건! 각 번호마다 명령어 한 줄로 작업해주세요) 1) /tmp/test 디렉터리는 Sticky Bit를 가지고 있으며 모든 권한을 가지고 있음 2) /tmp/test/test2 파일은 SetUID가 설정되어 있으며 소유자가 모든 권한을 가지고 있고, 그룹은 실행 권한만 가지고 있고, 다른 유저는 읽기와 실행을 가지고 있음(한줄 작업 조건에서 제외) 3) /tmp/test/test3...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day16/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day17",
        "excerpt":"보관과 압축을 한번에(윈도우에서처럼) 사용형식(보관 + 압축) tar [option] 아카이브파일명 보관할파일들 option c : 반드시 사용 → 아카이브파일 생성 f : 반드시 사용 → 보관 할 파일 지정 v : 선택 사항 z : gzip으로 압축 j : bzip2로 압축 예를 들어 tar cfvz 아카이브파일명.tar.gz 보관할파일 → 옵션의 순서와 대상의 순서가...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day17/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day18",
        "excerpt":"rpm -e 를 이용하여 vim패키지를 삭제해보았다. 삭제하니까 vi가 작동이 되지 않았다. centos 홈페이지에서 vim 패키지파일들을 다운로드하였었다. 패키지파일들이 있는 곳으로 커맨드라인을 옮기자 cd /root/다운로드 rpm -qa grep vim 을 입력해보면 현재 vim 관련 패키지들은 설치되어있지 않은 상태이다. rpm -ivh vim-X11-7.4.160-4.el7.x86_64.rpm ← 이름을 쓸 때 복사해서 붙여넣기 해도 되며(복사하고자 하는 이름을 드래그...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day18/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day19",
        "excerpt":"File System &amp; Disk Management File System 컴퓨터에 파일이나 자료를 쉽게 발견 및 접근할 수 있도록 보관 또는 조직하는 체제를 가리키는 말 통상 하드디스크나 CD-ROM 같은 실제 자료보관장치를 사용하여 파일의 물리적인 소재를 관리하는 것을 가리킴 파일시스템을 만들어야 파일을 보관할 수 있다. 따라서 처음 하드디스크를 사거나 윈도우를 지우는 경우 포맷을 진행하는데,...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day19/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day2",
        "excerpt":"작업용 개인 폴더를 만들 때 폴더명에 공백을 두지 말 것. 밑줄_로 처리하라고 하셨다. TUI작업시 경로가 두개로 잡힘? → 그럼 워크스테이션때문이 아니라 가상머신에 깔려있는 LinuxOS때문인건가. 그리고 두개로 잡힌다는건 무슨 말일까 TUI로 먼저 설치한 후 삭제한 뒤 GUI로 설치 -&gt; GUI를 제공하지 않도록 최소로만 설치해보았다(각종 과정은 생략하고 필요한 것만 설치) 서버는 무조건...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day2/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day20",
        "excerpt":"fdisk 명령어 → fdisk -l 또는 fdisk 디스크명 ‘fdisk 디스크명’ 으로 디스크 내부 진입시 파티션 생성 및 삭제등의 작업이 가능 mkfs -t xfs 파티션명 파일시스템 생성명령어 하드디스크 사용의 순서 장치 추가 → fdisk -l 로 확인 → fdisk로 진입 → 파티션 생성 → :w 로 저장 및 종료 → mkfs로...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day20/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day3",
        "excerpt":"가상머신 탭을 종료시킨경우 open a virtual machine 클릭하고 내 OS설치경로의 *.vms 클릭 후 실행 또는 상단 메뉴의 아이콘 중 show or hide the library아이콘이 있는데 그걸 클릭해서 내 vms파일을 구동시켜도 된다. VMware의 탭쪽에 각종 툴들이 있다. File탭에는 서버와 연결하는 항목도 있고.. Edit탭에는 이전에 배운 Virtual Network Editor가 있으며 View는 가상OS를...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day3/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day4",
        "excerpt":"기본 명령어 1)pwd - 현재 작업하고 있는 디렉터리 출력 (present working directory) 리눅스는 bash쉘에서 현재위치를 기본적으로 알려주기는 하지만 자세하게 보고싶다면 사용하는 명령어. 작업위치의 절대경로가 출력됨 리눅스에서는 로그인하면 터미널에서 위치는 자신의 홈 디렉터리가 기본경로이다. ~표시 관리자계정으로 로그인시 pwd치면 /root 일반사용자계정으로 로그인시 pwd치면 /home/사용자계정명 Unix에서는 터미널에서 #또는 $만 뜨므로 pwd는 거의 항상...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day4/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day5",
        "excerpt":"putty 를 통해 root계정으로 로그인하고 cd ~itbank 틸드사용하여 itbank 홈계정으로 이동하기 mkdir - 디렉토리 생성 명령어 make directory 사용형식 mkdir [option] 디렉토리명 디렉토리명에 상대경로 또는 절대경로를 추가하여 다른 위치에 폴더를 생성할 수도 있다. 그냥 디렉토리명만 작성한다면 커맨드라인 있는 폴더 하위에 생성됨 ls -l /2/3/4 4라는 폴더 하위에는 어떠한 것도 존재하지...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day5/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day6",
        "excerpt":"논리연산자 이전시간에 우리는 논리연산자 &amp;&amp;와 ||를 배웠다. a &amp;&amp; b → a가 실행되면 b도 실행. a가 실행되지 않으면 b도 미실행 a || b → a가 실행되면 b는 미실행, a가 미실행되면 b는 실행 a | b (연계) → a의 실행 결과 값을 b가 받아서 실행 ls /etc → 목록이 많다 ls...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day6/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day7",
        "excerpt":"vi(Visual Editor) → vi-sual editor. 줄여서 VI Editor 라고도 한다. 한 줄씩 편집하는 줄 단위 편집기가 아니라 한 화면을 편집하는 비주얼 에디터라는 뜻에서 유래 → 그러면 줄 단위 편집기도 있었다는건가??? 간결하면서도 강력한 기능을 제공 GUI환경이 아니라 TUI환경에서 사용 Windows 에서의 기본 프로그램인 메모장과 비슷하다. → 윈도우가 이 것을 토대로 삼았을지도?...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day7/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day8",
        "excerpt":"putty접속 안됐으나 VMware 가상네트워크설정에서 NAT에 있어서 두가지 체크사항 건드리니까 다시 됨. 한가지만 체크되어있었는데 먼저 체크 푼 다음에 설정창 껐다가 다시 키고, 체크사항 두개 다시 체크한 뒤에 설정창 끔. OS GUI에서도 네트워크 설정부분 껐다가 켰다. 아마 리눅스2에서 뭔가를 하나보다. → DHCP관련? Connect a host virtual adapter to this network → 본래...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day8/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      },{
        "title": "Linux_day9",
        "excerpt":"디렉토리 삭제 rmdir은 내부가 비어있는 경우에만 디렉토리 제거 가능 → 안에 파일이 있어도 삭제 할 수 있는 옵션은? → 없다. man rmdir 및 rmdir –help 로 내부 옵션 살폈는데 안에 파일이 있어도 삭제할 수 있는 옵션은 존재하지 않는다. 결국 rm -r 을 사용해야함 사용자계정 관리 User Account Management 관리자는 super...","categories": ["Linux"],
        "tags": [],
        "url": "https://ictechgy.github.io/linux/Linux_day9/",
        "teaser": "https://ictechgy.github.io/assets/images/photo-hangang.jpeg"
      }]
