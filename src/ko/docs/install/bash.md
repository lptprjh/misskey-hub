# bash 스크립트를 통한 설치 v3.0.0
셸 스크립트를 통해 Misskey를 간단하게 설치할 수 있는 스크립트입니다.

스크립트을 실행한 뒤 몇 가지 질문에 답변하기만 하면 Ubuntu 서버에 Misskey를 간편하게 설치하실 수 있습니다.

업데이트 스크립트도 별도로 준비되어 있습니다.

[Misskey v12를 설치](./bash-v165.md)  
[For older versions](./bash-v140.md)

## 스크립트 License
[MIT License](./LICENSE)

## 준비사항
1. 도메인 (인터넷 주소)
2. Misskey를 설치할 Ubuntu 서버
3. Cloudflare 계정 (권장)

::: danger
한 번 사용을 시작한 인스턴스의 도메인 호스트 이름은 절대 변경하지 마세요!
:::

Let's Encrypt 인증을 시도할 수 있는 횟수가 적기 때문에, 서버의 네트워크나 DNS 설정이 올바른지 충분히 확인한 다음 설치를 시작하여 주십시오.

## Cloudflare 설정
Cloudflare를 사용하실 경우, 이 스크립트를 실행하기 전에 Cloudflare의 도메인 설정을 완료하여 주십시오.
네임서버의 변경 사항이 적용되기까지 최대 3일이 소요될 수 있습니다.

또한, nginx와 Cloudflare를 같이 사용할 경우, Cloudflare에서 다음 항목이 설치되어 있는 지 확인하십시오.

- DNS가 서버를 올바르게 가리키도록 설정
- SSL/TLS 탭에서, 암호화 모드를 "Full"로 설정

## 설치 과정
### 1. SSH
SSH를 통해 서버에 접속합니다.
(RDP 등으로 데스크톱 환경을 사용 중인 경우 셸 또는 터미널을 열어 주세요.)

### 2. 최신 환경으로 업데이트
모든 패키지를 최신 버전으로 업그레이드한 다음, 서버를 재시작해 주세요.

```
sudo apt update; sudo apt full-upgrade -y; sudo reboot
```

### 3. 스크립트 설치
SSH 등을 통해 서버에 다시 접속한 다음, 스크립트를 통해 Misskey를 설치합니다.

설치하기 전에 [Tips](#Tips) 문서를 먼저 읽으시는 것을 강력히 권장합니다.

```
wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/ubuntu.sh -O ubuntu.sh; sudo bash ubuntu.sh
```

example.com은 Misskey를 설치할 도메인으로 변경하여 주십시오.

### 4. 업데이트
업데이트를 위한 스크립트가 준비되어 있습니다.

업데이트용 스크립트는 서버 환경을 업데이트하지 않으므로, Changelog(일본어) 또는 [GitHub release list (영어)](https://github.com/joinmisskey/bash-install/releases)를 먼저 참고하여 사전 마이그레이션 작업이 필요한 지 확인하십시오.

먼저 업데이트용 스크립트를 다운로드합니다.

```
wget https://raw.githubusercontent.com/joinmisskey/bash-install/main/update.ubuntu.sh -O update.sh
```

추후 Misskey를 업데이트할 때에 스크립트를 실행하시면 됩니다.

```
sudo bash update.sh
```

- 설치 시 systemd 환경을 선택하신 경우, '-r' 옵션을 추가하여 업데이트가 끝날 때에 서버를 재부팅할 수 있습니다.
- 설치 시 docker 환경을 선택하신 경우, 사용할 Docker 이미지를 `리포지터리:태그` 형식으로 지정할 수 있습니다.

## 동작이 확인된 환경

### Oracle Cloud Infrastructure

이 스크립트는 Oracle Cloud Infrastructure의 Always Free 서비스에서 제공되는 2가지 셰이프에서 정상적으로 동작합니다.

- VM.Standard.E2.1.Micro (AMD)
- VM.Standard.A1.Flex (ARM) [1 OCPU RAM 6GB 혹은 상위]

설치 시에는 iptables를 사용하도록 설정하십시오.

## 이슈 & PR을 통한 기여 환영
상기 환경에서 스크립트가 정상적으로 동작하지 않거나 설치되지 않는 경우, 스크립트에 버그가 있을 가능성이 있습니다. 설치하신 서버의 환경과 설정과 함께 GitHub에 이슈를 올려 주시면 매우 감사드립니다.

그 외의 환경에 대해서는 지원이 어려울 수 있으나, 환경을 자세히 알려 주시면 도움을 드릴 수도 있습니다.

기능 제안 등의 의견도 환영합니다.

# Tips
어떤 선택지를 골라야 하는지나, 각 선택지의 차이에 대해 소개합니다.

## Systemd vs Docker
v1부터 설치 방법을 Systemd와 Docker 가운데 선택할 수 있게 되었습니다.。

Docker로 설치하더라도, **Misskey 서비스만을 Docker로 설치하고**, Redis나 Postgres와 같은 서비스는 호스트에서 직접 실행합니다.
[모든 서비스를 docker-compose로 통합시키는 방법은 mamemononga님의 게시물을 참고하시면 좋습니다(일본어).](https://gist.github.com/mamemomonga/5549bb69cad8e5618e5527593d4890e0)

Docker Hub의 이미지를 사용하는 것은, Misskey의 빌드 과정을 생략할 수 있어 **제일 권장드리는 설정**입니다.
단, 마이그레이션 과정이 필요한 것은 동일하기 때문에 업데이트 시 Misskey 서비스가 일시적으로 정지되는 것은 다른 설치 방법과 동일합니다.
또한, Misskey 빌드 환경을 설치하지 않기 때문에, 포크 버전을 사용할 때의 과정이 복잡해집니다.

로컬에서 Docker 이미지를 빌드하는 것은 퍼포먼스 면에서 권장드리지 않습니다.

systemd는 Docker Hub에 이미지를 올리는 것 까지는 아니지만, 포크 버전을 사용하고 싶을 경우에 추천드립니다.

위의 내용을 정리하면, 추천드리는 설치 방법은 다음 순서와 같습니다.

1. Docker Hub
2. systemd
3. Dockerビルド

## nginx의 사용 여부
Misskey를 1개의 서버에 설치할 경우에는 nginx의 사용을 권장드립니다.

로드 밸런서를 설치하신다면 nginx를 설치하지 않고, [Misskey의 nginx 설정](../admin/nginx.html)을 참고하여 로드 밸런서를 설정하는 것을 추천드립니다.

## Add more swaps!
스왑을 설정하지 않았을 경우, 메모리가 3GB 미만의 환경에서는 설치를 진행하지 않습니다.
스왑을 추가하시거나 메모리를 확장하여 주십시오.

## 스크립트 실행 도중 실패하여 다시 실행할 경우
만에 하나 설치 도중 실패하여 다시 스크립트를 실행할 경우, 아래 사항을 따라 주십시오.

- Redis나 Postgres의 설치가 완료되었다면 'install locally'는 No로 지정하십시오.
  host・port 설정은 Enter를 눌러 넘깁니다.
  사용자명과 암호는 이전에 입력한 값을 그대로 입력합니다.

## .env 파일
Misskey 설치 스크립트에서는 2개의 .env 파일을 생성합니다.
이 .env 파일은 업데이트 시에 사용됩니다.

### /root/.misskey.env
misskey를 실행할 유저가 기록되어 있습니다.

### /home/(misskeyユーザー)/.misskey.env
systemd를 통해 설치할 경우 생성됩니다.
Misskey의 구성 요소가 어느 디렉토리에 있는 지 기록되어 있습니다.

### /home/(misskeyユーザー)/.misskey-docker.env
Docker를 통해 설치할 경우 생성됩니다.
실행 중인 Docker 컨테이너와 이미지의 고유 번호가 기록되어 있습니다.
컨테이너의 고유 번호는 업데이트할 때 마다 갱신되며, 오래된 이미지는 삭제됩니다.

## 직접 관리하기
설치를 마친 다음, 직접 구성을 변경할 때를 대비한 참고사항입니다.

"example.com"는 Misskey를 설치한 도메인으로 치환하십시오.

### Misskey 설치 디렉토리
Misskey의 소스 코드는`/home/유저/디렉토리`에 저장되어 있습니다.
（유저와 디렉토리의 기본값은 misskey으로, 대부분의 경우 `/home/misskey/misskey`에 해당합니다.）

Misskey의 소스 코드 디렉토리에는 다음과 같이 이동할 수 있습니다.

```
sudo -iu 유저
cd 디렉토리
```

Misskey 디렉토리의 작업을 그만두고 이전 유저로 돌아가려면 `exit`를 실행하십시오.

```
exit
```

### systemd
systemd의 프로세스 명은 example.com입니다.
Misskey 서비스를 재시작하려면 다음과 같이 실행할 수 있습니다.

```
sudo systemctl restart example.com
```

journalctl로 로그를 확인하려면 다음과 같이 실행하십시오.

```
journalctl -t example.com
```

systemd 데몬 설정 파일은 `/etc/systemd/system/example.com.service` 과 같이 저장되어 있습니다.

### Docker
Docker는 Misskey 유저를 통해 rootless 모드로 실행됩니다.

`sudo`로 Misskey 유저에 진입할 경우, `XDG_RUNTIME_DIR`와 `DOCKER_HOST` 환경 변수를 지정해야 합니다.

```
sudo -iu 유저
export XDG_RUNTIME_DIR=/run/user/$UID
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock

# 실행 중인 Docker 프로세스를 표시
docker ps

# Docker 이미지 빌드 (저장소: local/misskey:latest)
docker build -t local/misskey:latest ./misskey

# docker run
docker run -d -p 3000:3000 --add-host=docker_host:10.0.0.1 -v /home/misskey/misskey/files:/misskey/files -v "/home/misskey/misskey/.config/default.yml":/misskey/.config/default.yml:ro --restart unless-stopped -t "local/misskey:latest"

# 실행 로그 표시
docker logs --tail 50 -f 컨테이너ID
```

한 줄로 정리하면 다음과 같습니다.

```
sudo -u 사용자명 XDG_RUNTIME_DIR=/run/user/$(id -u 사용자명) DOCKER_HOST=unix:///run/user/$(id -u 사용자명)/docker.sock docker ps
```

### nginx
nginx의 설정은 `/etc/nginx/conf.d/example.com.conf` 와 같이 저장되어 있습니다.

### Redis
requirepass와 bind가 `/etc/redis/misskey.conf`로 설정되어 있습니다.

## Q. 업데이트 이후 HTTP 502 에러와 함께 접속할 수 없어요
Docker 환경으로 설치하였다면, 업데이트 직후 마이그레이션 과정으로 인해 접속이 잠시 지연될 수 있습니다.
로그를 확인하여 마이그레이션이 끝나 있는 지 확인하여 주십시오.

systemd의 경우 `pnpm install` 과정에 문제가 있었을 가능성이 있습니다.

[위의 내용을 참고하여](#misskey-설치-디렉토리) Misskey 디렉토리로 이동한 다음, 다음 명령을 실행한 다음 업데이트를 시도하여 주십시오.

```
pnpm run clean-all
```

journalctl을 통해 로그를 확인하면 대체로 re2와 같은 표시를 확인할 수 있습니다.

## Q. 같은 서버에서 또 다른 Misskey를 설치할 수 있나요?
이 스크립트를 통해서는 동일한 서버에 여러 개의 Misskey를 설치할 수 없습니다.
이를 무시하고 실행할 경우 일부 설정이 덮어씌워지거나, 에러가 발생할 수 있습니다.
