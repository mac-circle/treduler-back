# TREDULER

시간 남아서 api 문서 정리해둡니다

## API

baseURL : serverURL + /api

### USER

- [v] 회원가입 하기
  endpoint: /user/new-account [POST]
  form data 로 email 과 password 인자를 받습니다.
  password 같은 경우에는 클라이언트에서 알아서 체크해서 (password1 === password2 가 아닌 경우에는 요청하지 마세요. ) server 에 보내주세요. 그리고 보내주시기 전에는 클라이언트측에서 알아서 해싱작업 한 번 한 후에 보내주세요. 서버에서도 해싱 작업을 할거지만 클라이언트측에서 해줘야 더 의미있습니다.  
  return type 은 {ok, error, token, status} 입니다.

args: {email, password}
headers:{}
return: {ok, error, token, status}

- [v] 로그인 하기 [POST]
  endpoint: /user/sign-in
  form data 로 email 과 password 를 받습니다. 회원가입할때 password 를 한 번 해싱해서 보내주셨을거라 믿습니다. 로그인할때도 마찬가지로 해싱된 password 로 보내주세요.

args:{email, password}
headers:{}
return: {ok, error, token, status}

### VERIFY

- [v] 유저에게 가입 요청한 email 주소로 인증 이메일을 쏴주는 api
  endpoint: /verify/get-request [GET]

유저가 token 을 가지고 있어야 합니다. headers 부분에 token 이라는 key 값으로 value를 token 값을 넣어주세요.

args:{}
headers:{token}
return:{ok, error, status}

- [v] 유저가 회원가입을 하면 처음에 인증이 되어진 상태가 아닙니다. email 인증을 하여야 인증된 유저가 되어지고, 인증된 유저들만 사이트를 이용할 수 있습니다. 이 api 는 해당 유저를 인증해주는 api 입니다.

endpoint: /verify/verify-user?tkn=token [POST]

args:{}
headers:{}
return {ok, error, status}

### UNSPLASH

무작위로 랜덤한 이미지를 가져오는 api 입니다. 근데 받아오는 이미지 용량들이 너무 커서 클라이언트측에서 로딩하는데 시간이 너무 오래걸립니다. 그래서 사용할지 안사용할지 아직 미정.

### THEY SAID SO

무작위로 유명한 명언들을 가져오는 api 입니다.

endpoint: /quotes/inspire

args:{}
headers:{}
return: {
ok,
quote:{
text,
author
},
error,
status
}
