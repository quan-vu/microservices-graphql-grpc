import time
from locust import HttpUser, task

BASE_GRAPHQL = 'http://localhost:4000/graphql'

class BeanchmarkPerformance(HttpUser):

    # def on_start(self):
    #     self.client.post("/login", json={"username":"foo", "password":"bar"})

    # @task
    # def read_home(self):
    #     self.client.get(BASE_GRAPHQL)

    @task()
    def read_products(self):
        query = """
            query getProducts{
                products{
                    id
                    name
                    slug
                    thumbnail
                    description
                    price
                    inStock
                }
            }
        """
        response = self.client.post(BASE_GRAPHQL,
            name="GraphQL",
            headers={
                "Accept": "application/json",
                # "Authorization": "<Authorization-Token>"
            },
            json={"query": query }
        )
        time.sleep(1)
