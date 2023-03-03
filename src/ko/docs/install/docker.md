Create Misskey instance with Docker Compose
================================================================

이 가이드에서는 Misskey의 설치 및 준비 방법에 대해 설명합니다.

::: danger
한 번 사용을 시작한 인스턴스의 도메인 호스트 이름은 절대 변경하지 마세요!
:::


::: tip 준비사항
- Docker 및 Docker Compose를 설치해 주세요.
:::

리포지터리 복제
----------------------------------------------------------------
```sh
git clone -b master https://github.com/misskey-dev/misskey.git
cd misskey
git checkout master
```

Misskey 설정
----------------------------------------------------------------
다음과 같이 설정 예시 파일를 복사합니다.

```sh
cp .config/example.yml .config/default.yml
cp .config/docker_example.env .config/docker.env
cp ./docker-compose.yml.example ./docker-compose.yml
```

텍스트 편집기를 이용해 `default.yml`와 `docker.env` 파일을 열어, 파일 내의 지시에 따라 수정합니다.

필요에 따라 `docker-compose.yml` 를 수정하십시오. (포트 변경 등)

Misskey 빌드 및 초기화
----------------------------------------------------------------
다음 명령을 실행해 Misskey를 빌드(`pnpm run build`)하고 데이터베이스를 초기화(`pnpm run init`)합니다. 본 작업은 시간이 소요되는 작업입니다.

``` shell
sudo docker compose build
sudo docker compose run --rm web pnpm run init
```

Misskey 실행
----------------------------------------------------------------
Misskey의 실행을 위한 모든 준비가 끝났습니다. 이제 다음 명령을 통해 Misskey를 실행할 수 있습니다.


```sh
sudo docker compose up -d
```

Misskey 업데이트 방법
----------------------------------------------------------------
::: warning
업데이트 시 반드시 [변경사항](https://github.com/misskey-dev/misskey/blob/master/CHANGELOG.md)를 확인하고 변경사항이나 필요한 추가 작업을 미리 확인해 주십시오.
:::

```sh
git stash
git checkout master
git pull
git submodule update --init
git stash pop
sudo docker compose build
sudo docker compose stop && sudo docker compose up -d
```

업데이트의 내용 및 DB 규모에 따라 시간이 소요될 수 있습니다.

CLI 명령어를 실행하는 방법
----------------------------------------------------------------
```sh
sudo docker compose run --rm web node packages/backend/built/tools/foo bar
```
