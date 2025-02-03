from flask import render_template
from calculadora import app


# Rota para página principal
@app.route("/")
def home():
    return render_template("index.html")
