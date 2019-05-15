# jinseitou

## version
ruby:2.6.3-alpine3.8

## setup

```
docker-compose up --build -d
```

## usage

### db
```
docker-compose exec app bin/rails db:create
docker-compose exec app bin/rials db:migrate
```

### mysqlに接続

dbのcontainerをportを変えて立てているので、hostとportを指定して接続する
```
mysql -u root -h 127.0.0.1 -P 13306
```

### pry

debugしたい箇所にpryを仕込む
```
class KotaClass
  binding.pry
end
```

appのcontainer id調べる
```
docker ps
```

attachする
```
docker attach ${調べたcontainer id}
```

### ts build

parcelを使ってる
```
docker-compose exec front yarn build
```

ts watch
```
docker-compose exec front yarn start:js
```

scss watch
```
docker-compose exec front yarn start:css
```

### lint

tslint
```
docker-compose exec front yarn tslint
```

prettier
```
docker-compose exec front yarn prettier
```
