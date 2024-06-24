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

#seleciona relatório
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[2]/div/div/div/a[5]').click()
navegador.find_element('xpath',
                       '//*[@id="root"]/div/nav/div[3]/button[1]').click()
time.sleep(1)

#seleciona tipo produto
navegador.find_element('xpath',
                       '//*[@id="produtos"]').click()
time.sleep(1)

#clica pra gerar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/button').click()
time.sleep(2)
#muda para estoque
navegador.find_element('xpath',
                       '//*[@id="estoque"]').click()
time.sleep(1)

#clica pra gerar
navegador.find_element('xpath',
                       '//*[@id="root"]/div/div/button').click()

