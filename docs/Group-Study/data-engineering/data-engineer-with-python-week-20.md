---
title: 'Data Engineering 스터디 20주차'
date: '2022-01-10'
# tags: ["Data Engineering"]
draft: false

description: PseudoLab Data Science Fellowship 1기

sidebar_position: 1
---

# Introduction to AWS Boto in Python

## Putting Files in the Cloud!

### Boto3

- Python용 AWS SDK
  - `SDK`
    - Software Development Kit
    - 개발에 도움이 도리 개발 도구 프로그램, 디버깅 프로그램, 문서, API 등
    - 예시
      - Java를 사용하기 전 JDK 설치
- Python 애플리케이션, 라이브러리 또는 스크립트를 S3, EC2, DynamoDB 등 AWS 서비스와 쉽게 통합할 수 있음
- 사용 예시
  ```python
  import boto3

  # 사용할 서비스를 지정하고 AWS region, key id, secret access key 입력
  s3 = boto3.client('s3',
                  region_name='us-east-1',
                  aws_access_key_id=AWS_KEY_ID,
                  aws_secret_access_key=AWS_SECRET) 

  response = s3.list_buckets()
  ```

### IAM

- IAM(Identity Access Management)
  - AWS 리소스에 대한 액세스를 안전하게 제어할 수 있는 웹 서비스
  - IAM을 사용하여 리소스를 사용하도록 인증(로그인) 및 권한이 부여된 대상을 제어

- AWS 계정을 처음 생성할 때 해당 계정의 모든 AWS 서비스 및 리소스에 대한 완전한 엑세스 권한이 있는 SSO(Single Sign-In) ID로 시작
  - `루트 사용자`
- 루트 사용자를 이용하여 하위에 `IAM 사용자`를 생성
  - 개별로 key id, secret access key 생성하기 위해 IAM을 사용

### 대표적인 AWS 서비스 간단히 정리

- IAM
  - Identity Access Management
  - 보안 서비스
- S3
  - Simple Storage Service
  - 클라우드 서비스
- SNS
  - Simple Notification Service
  - 메시지(이메일, 문자) 서비스
- Comprehend
  - NLP(자연어 처리) 서비스
  - 텍스트에서 유용한 관계를 찾아냄
- Rekognition
  - CV(Computer Vision) 서비스
  - 이미지 및 비디오에서 정보 등을 추출
- RDS
  - Relational Database Service
  - 클라우드에서 관계형 데이터베이스 간편 설정, 운영 및 확장
- EC2
  - Elastic Compute Cloud
  - 클라우드 서비스 
- Lambda
  - EC2와 다르게 별도의 서버 세팅 없이 바로 코드를 함수로 실행할 수 있는 서비스 

### S3

- 버킷(bucket): 객체가 파일이라면 버킷은 연관된 객체들을 모은 최상위 디렉토리
  - string 형태의 고유 name을 가짐 
  - 많은 객체들이 포함됨
  - bucket 단위로 region(리전, 지역)을 지정
  - bucket에 포함된 모든 객체에 대해 각각 인증과 접속 제한을 걸 수 있음 -> 버킷 정책
  - 자신의 활동에 대한 로그를 생성하고 다른 버킷에 씀
  - 버킷 만들기
    ```python
    import boto3
    s3 = boto3.client('s3', region_name='us-east-1',
                            aws_access_key_id=AWS_KEY_ID,
                            aws_secret_access_key=AWS_SECRET)

    bucket = s3.create_bucket(Bucket='gid-requests') # bucket name 
    ```
  - 버킷 이름은 고유해야함
  - S3에 있는 모든 버킷 리스트 가져오기
    ```python
    import boto3

    s3 = boto3.client('s3', region_name='us-east-1',
                            aws_access_key_id=AWS_KEY_ID,
                            aws_secret_access_key=AWS_SECRET)

    bucket_response = s3.list_buckets() 
    buckets = bucket_response['Buckets']
    print(buckets) # bucket의 모든 정보 출력
    
    # bucket 이름만 출력
    for buckets in bucket_response['Buckets']:
        print(buckets['Name'])
    ```
  - 버킷 삭제
    ```python
    s3 = boto3.client('s3', region_name='us-east-1',
                            aws_access_key_id=AWS_KEY_ID,
                            aws_secret_access_key=AWS_SECRET)

    response = s3.delete_bucket('gid-requests') 
    ```
- 객체(object): S3에 저장된 데이터(파일)
  - 고유한 key를 가짐
    - key는 버킷 root에서 전체 경로
  - 하나의 버킷에만 속할 수 있음
  - 파일 업로드
    - `Filename`은 로컬 파일 경로, `Bucket`은 업로드 할 버킷의 이름, `Key`는 객체의 이름 지정(AWS에 올라가는 경로)
    - `upload_file` 메소드는 반환 값이 없음
    ```python
    s3 = boto3.client('s3', region_name = 'us-east-1',
                      aws_access_key_id=AWS_KEY_ID,
                      aws_secret_access_key=AWS_SECRET)

    s3.upload_file(Filename='gid_requests_2019_01_01.csv',
                  Bucket='gid-requests',
                  Key='gid_requets_2019_01_01.csv')
    ```
  - 버킷의 객체 리스팅
    - `Bucket`은 이름, `MaxKeys`는 response 객체 개수 제한, `Prefix`는 제공하는 문자열로 시작하는 객체에 대한 response가 제한됨
    ```python
    response = s3.list_objects(Bucket='gid-requests',
                              MaxKeys=2,
                              Prefix='gid_requests_2019_')

    print(response)
    ```
  - 객체 metatdata 받기
    - 객체에 대한 더 많은 정보를 얻기 위해 사용
    ```python
    response = s3.head_object(Bucket='gid-requets',
                              Key='gid_requets_2018_12_30.csv')

    print(response)
    ```
  - 파일 다운로드
    ```python
    s3.download_file(Filename='gid_requests_downed.csv',
                    Bucket='gid-requests',
                    Key='gid_requests_2018_12_30.csv')
    ```
  - 객체 삭제
    ```python
    s3.delete_object(Bucket='gid-requests',
                    Key='gid_requests_2018_12_30.csv')
    ```

## Sharing Files Securely

### AWS Permission System in S3

- IAM을 사용하여 AWS 서비스, 버킷 및 객체에 대한 사용자의 접근 제어
  - IAM은 모든 AWS 서비스에 적용됨
- Bucket Policy(버킷 정책)를 통해 버킷과 객체를 제어
  - IAM과 Bucket Policy는 사용자가 다수인 환경에서 유용함
- ACL(Access Control List, 액세스 제어 목록)을 통해 버킷 내의 특정 객체에 대한 권한을 설정할 수 있음
- Presigned(미리 서명된) URL을 사용하면, 객체에 임시로 액세스 할 수 있dma

### ACL

- 버킷과 객체에 대한 접근 관리
- access를 허용할 AWS 계정이나 그룹의 access 유형을 정의
- response를 받으면 ACL을 확인해 필요한 접근 권한을 보유하고 있는지 판단
- private, public이 있으며 기본은 `private`
- `put_objects_acl` 메소드를 사용하여 public-read로 변경
  ```python
  s3.upload_file(Filename='potholes.csv',
                Bucket='gid-requests',
                Key='potholes.csv')

  s3.put_objects_acl(Bucket='gid-requests',
                    Key='potholes.csv',
                    ACL='public-read')
  ```
- 업로드 할 때부터 public-read로 설정
  ```python
  s3.upload_file(Bucket='gid-requests',
                Filename='potholes.csv',
                Key='potholes.csv',
                ExtraArgs={'ACL':'public-read'})
  ```

### URL

- 주소
  - `https://{bucket}.s3.amazonaws.com/{key}`
  - e.g. `https://gid-requests.s3.amazonaws.com/2019/potholes.csv`
- object의 public URL 생성 -> presigned URL과 다름
  ```python
  url = "https://{}.s3.amazonaws.com/{}".format("gid-requests", "2019/potholes.csv")
  df = pd.read_csv(url)
  ```

### AWS 접근 순서

- 먼저 Presigned URL인지 확인함
- 후에 IAM, Bucket Policy, ACL을 확인

### private file

- 파일에 대해 ACL에서 `public-read`을 설정하지 않으면 AWS는 기본적으로 `private`
- pandas read_csv를 사용하여 Public Object URL에 접근하려 하면 `HTTP Error 403: Forbidden`이 발생
  - 이를 해결하기 위해 `download_file` 메소드 사용
    - 파일이 많이 변경되지 않을 때 사용
    ```python
    s3.download_file(Filename='potholes_local.csv',
                    Bucket='gid-staging',
                    Key='2019/potholes_private.csv')

    pd.read_csv('./potholes_local.csv')
    ```
  - boto3의 `get_object` 메소드를 사용하여 S3의 파일에 접근하는 것이 더 간단한 방법
    ```python
    obj = s3.get_object(Bucket='gid-requests', Key='2019/potholes.csv')
    print(obj)

    pd.read_csv(obj['Body']) # csv 파일처럼 읽음
    ```

### Presigned URL

- S3 private object에 대한 접근 권한을 일시적으로 부여할 수 있음
- 지정된 기간 내 만료되는 특수한 URL
- 파일 업로드, presigned URL 생성
  ```python
  s3.upload_file(Filename='./potholes.csv',
                 Key='potholes.key',
                 Bucket='gid-requests')

  share_url = s3.generate_presigned_url(ClientMethod='get_object',
                                        ExpiresIn=3600, # 제한 시간
                                        Params={'Bucket': 'gid-requests', 'Key': 'potholes.csv'})
  pd.read_csv(share_url)
  ```

### 다수의 파일을 하나의 DataFrame에 로드하기

```python
# Create list to hold our DataFrames
df_list = []

# Request the list of csv's from S3 with prefix; Get contents
response = s3.list_objects(
Bucket='gid-requests',
Prefix='2019/')

# Get response contents
request_files = response['Contents']

# Iterate over each object
for file in request_files:
    obj = s3.get_object(Bucket='gid-requests', Key=file['Key'])

    # Read it as DataFrame
    obj_df = pd.read_csv(obj['Body'])

    # Append DataFrame to list
    df_list.append(obj_df)

# Concatenate all the DataFrames in the list
df = pd.concat(df_list)

# Preview the DataFrame
df.head()
```

- S3는 HTML 페이지 제공함
- pandas를 사용하여 DataFrame을 html로 변경 후 S3에 올리기
  - render_links: 모든 URL을 클릭할 수 있도록 반환
  - columns: 렌더링하려는 column만 list로 전달
  - border: 0이면 테두리 제거, 1이면 테두리 표시
  ```python
  df.to_html('table_agg.html',
              render_links=True,
              columns['service_name', 'request_count', 'info_link'],
              border=0)
  ```
  - 업로드 하는 방법은 다른 파일을 업로드하는 방법과 동일
    ```python
    s3.upload_file(
      Filename='./table_agg.html',
      Bucket='datacamp-website',
      Key='table.html',
      ExtraArgs = {
        'ContentType': 'text/html',
        'ACL': 'public-read'}
    )
    ```
    - `https://datacamp-website.s3.amazonaws.com/table.html`
- 이미지 업로드
  - `ContentType`을 조정하면 다른 타입의 파일도 올릴 수 있음
    - IANA: Internet Assigned Numbers Authority, 인터넷 할당 번호 관리기간
      - JSON: application/json
      - PNG: image/png
      - PDF: application/pdf
      - CSV: test/csv
      - 자세한 건 [IANA documentation](https://www.iana.org/assignments/media-types/media-types.xhtml) 참고
  ```python
  s3.upload_file(
    Filename='./plot_image.png',
    Bucket='datacamp-website',
    Key='plot_image.png',
    ExtraArgs = {
      'ContentType': 'image/png',
      'ACL': 'public-read'}
  )
  ```
- 다수의 HTML 또는 이미지 파일 공유하기 위해 index page 생성
  ```python
  # List the gid-reports bucket objects starting with 2019/
  r = s3.list_objects(Bucket='gid-reports', Prefix='2019/')
  # Convert the response contents to DataFrame
  objects_df = pd.DataFrame(r['Contents'])
  ```
  ```python
  # Create a column "Link" that contains website url + key
  base_url = "http://datacamp-website.s3.amazonaws.com/"
  objects_df['Link'] = base_url + objects_df['Key']
  ```
  ```python
  # Write DataFrame to html
  objects_df.to_html('report_listing.html',
                    columns=['Link', 'LastModified', 'Size'],
                    render_links=True)
  ```
  ```python
  s3.upload_file(
    Filename='./report_listing.html',
    Bucket='datacamp-website',
    Key='index.html',
    ExtraArgs = {
    'ContentType': 'text/html',
    'ACL': 'public-read'}
  )
  ```

### Case Study: Generating a Report Repository

- 매월 사례 유형별로 요청을 받은 횟수에 repository 사이트 생성
  - raw data에서 해당 월의 파일 다운로드
    - `gid-requests` bucket에서 raw data 가져옴 
      - 매일 CSV가 생성되는 버킷
      ```python
      # Create list to hold our DataFrames
      df_list = []

      # Request the list of csv's from S3 with prefix; Get contents
      response = s3.list_objects(
        Bucket='gid-requests',
        Prefix='2019_jan')

      # Get response contents
      request_files = response['Contents']
      ```
      ```python
      # Iterate over each object
      for file in request_files:
          obj = s3.get_object(Bucket='gid-requests', Key=file['Key'])

          # Read it as DataFrame
          obj_df = pd.read_csv(obj['Body'])

          # Append DataFrame to list
          df_list.append(obj_df)
      ```
  - 하나의 csv로 concatenate
    ```python
    # Concatenate all the DataFrames in the list
    df = pd.concat(df_list)

    # Preview the DataFrame
    df.head()
    ```
  - 집계한 DataFrame 생성
  - CSV, HTML에서 DataFrame으로 쓰기
    - `df.to_csv('jan_final_report.csv')`
    - `df.to_html('jan_final_report.html')`
  - Bokeh로 plot 생성 후 HTML로 저장
    - `jan_final_chart.html`
  - `gid-reports` bucket 생성
  - 3개의 파일을 S3에 업로드
    ```python
    # Upload Aggregated CSV to S3
    s3.upload_file(Filename='./jan_final_report.csv',
                  Key='2019/jan/final_report.csv',
                  Bucket='gid-reports',
                  ExtraArgs = {'ACL': 'public-read'})
    # Upload HTML table to S3
    s3.upload_file(Filename='./jan_final_report.html',
                  Key='2019/jan/final_report.html',
                  Bucket='gid-reports',
                  ExtraArgs = {
                    'ContentType': 'text/html',
                    'ACL': 'public-read'})
    # Upload Aggregated Chart to S3
    s3.upload_file(Filename='./jan_final_chart.html',
                  Key='2019/jan/final_chart.html',
                  Bucket='gid-reports',
                  ExtraArgs = {
                    'ContentType': 'text/html',
                    'ACL': 'public-read'})
    ```
  - 모든 파일의 리스트를 보여주는 `index.html` 생성
    ```python
    # List the gid-reports bucket objects starting with 2019/
    r = s3.list_objects(Bucket='gid-reports', Prefix='2019/')
    # Convert the response contents to DataFrame
    objects_df = pd.DataFrame(r['Contents'])
    # Create a column "Link" that contains website url + key
    base_url = "https://gid-reports.s3.amazonaws.com/"
    objects_df['Link'] = base_url + objects_df['Key']
    ```
    ```python
    # Write DataFrame to html
    objects_df.to_html('report_listing.html',
                      columns=['Link', 'LastModified', 'Size'],
                      render_links=True)
    ```
    ```python
    # Upload the file to gid-reports bucket root.
    s3.upload_file(
      Filename='./report_listing.html',
      Key='index.html',
      Bucket='gid-reports',
      ExtraArgs = {
        'ContentType': 'text/html',
        'ACL': 'public-read'
      })
    ```
    - `http://gid-reports.s3.amazonaws.com/index.html`

## Reporting and Notifying

## Pattern Recognition

## References

>- [[AWS] IAM이란 무엇입니까?](https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/introduction.html)
