# import requests
# import json
# from pytest_schema import schema, And, Enum, Optional, Or, Regex


# API_ROOT = 'http://products/organizations'


# expected_oganization_list = {
#     "message": str,
#     "success": bool,
#     "data": {
#         "total": int,
#         "limit": int,
#         "offset": Or(None, str),
#         "last_page": Or(None, int),
#         "next_page_link": Or(None, str),
#         "data": Or(None, list)
#     }
# }

# expected_oganization_detail = {
#     "message": str,
#     "success": bool,
#     "data": {
#         "organization_id": str,
#         "user_id": int,
#         "name": str,
#         "alias": str,
#         "logo": Or(None, str),
#     }
# }

# class TestOrganizationApi:

#     results = []
#     organization_id = ''

#     def test_create_organization(self):
#         payload = {
#             "user_id": 1,
#             "name": "Alpha INC",
#             "alias": "alpha-inc",
#             "logo": "https://ainc.vn/wp-content/uploads/2021/03/alpha-Logo.png"
#         }
#         response = requests.post(url=API_ROOT, json=payload)
#         result = response.json()

#         assert response.status_code == 201
#         assert schema(expected_oganization_detail) == result


#     def test_get_list_and_detail(self):
#         # Case 1: get list with pagination
#         url = f'{API_ROOT}'
#         response = requests.get(url=url)
#         result = response.json()

#         if result['data'] is not None and len(result['data']) > 0:
#             print(result['data']['data'])
#             self.organization_id = result['data']['data'][0]['organization_id']

#         assert response.status_code == 200
#         assert schema(expected_oganization_list) == result

#         # Case 2: Get detail by id 
#         url = f'{API_ROOT}/{self.organization_id}'
#         print(url)
        
#         response = requests.get(url=url)
#         result = response.json()
#         assert response.status_code == 200
#         assert schema(expected_oganization_detail) == result
