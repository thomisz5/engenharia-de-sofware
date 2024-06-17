from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

chrome_options = Options()
chrome_options.add_experimental_option("detach", True)
servico = Service(ChromeDriverManager().install())
navegador = webdriver.Chrome(service=servico, options=chrome_options)

navegador.get("http://localhost:3000")
navegador.maximize_window()

#desce o dropdown
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[2]/div/div/input').click()
time.sleep(1)
#seleciona nota fiscal
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[2]/div/div/div/a[3]').click()
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[3]/button[3]').click()
time.sleep(1)

#clica em cadastrar nota fiscal
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[2]/button[1]').click()
time.sleep(1)

#preenche cpf
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[1]').send_keys("12345678901")
#preenche Produto
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[2]').send_keys("Tênis")
#preenche quantidade
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[3]').send_keys("2")
#preenche data emissao
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[4]').send_keys("17/06/2024")
#preenche cnpj
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[5]').send_keys("12345678901234")

time.sleep(1)

#clica em cadastrar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/div/button[1]').click()
time.sleep(1)

#clica em consultar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[2]/button[2]').click()
#preenche pesquisa
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input').send_keys("Tênis")
time.sleep(1)

#volta pra tela inicial
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[1]/a').click()

time.sleep(1)

#desce o dropdown
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[2]/div/div/input').click()
#seleciona estoque
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[2]/div/div/div/a[4]').click()
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[3]/button[3]').click()
time.sleep(1)

#clica pra cadastrar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[2]/button[1]').click()
time.sleep(1)

#preenche nome do produto
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[1]').send_keys("Água")
#preenche código de barras
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[2]').send_keys("091236409127")
#preenche lote
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[3]').send_keys("2355")
#preenche categoria
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[4]').send_keys("Calçados")

time.sleep(2)

#clica pra cadastrar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/div/button[1]').click()
time.sleep(2)

#clica pra consultar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[2]/button[2]').click()
#preenche pesquisa
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input').send_keys("Tênis")