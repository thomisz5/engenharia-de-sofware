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

#desce o dropdown
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[2]/div/div/input').click()
time.sleep(1)
#seleciona usuarios
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[2]/div/div/div/a[1]').click()
time.sleep(1)

#clica em cadastrar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[2]/button[1]').click()
time.sleep(1)

#preenche nome
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[1]').send_keys("Prof. Adler")
#preenche cpf
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[2]').send_keys("12345678910")
#preenche usuario.tipo
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[3]').send_keys("Administrador")
time.sleep(1)
#clica em cadastrar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/div/button[1]').click()
time.sleep(1)

#clica em consultar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[2]/button[2]').click()
time.sleep(2)

#volta pra tela inicial
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[1]/a').click()

time.sleep(1)

#desce o dropdown
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[2]/div/div/input').click()
time.sleep(1)

#seleciona produtos
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[2]/div/div/div/a[2]').click()
time.sleep(1)

#clica pra cadastrar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[2]/button[1]').click()
time.sleep(1)

#preenche nome
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[1]').send_keys("Chocolate")
#preenche código
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[2]').send_keys("12341234")
#preenche preço
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[3]').send_keys("7,45")
time.sleep(2)

#clica pra limpar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/div/button[2]').click()
time.sleep(1)

#preenche nome
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[1]').send_keys("Beterraba")
#preenche código
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[2]').send_keys("678678")
#preenche preço
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/input[3]').send_keys("2,66")

time.sleep(1)

#clica pra cadastrar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[3]/div/button[1]').click()
time.sleep(2)

#clica pra consultar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/div[2]/button[2]').click()