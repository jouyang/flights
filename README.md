To restart server after deployment:
sudo supervisorctl restart flights

Prerequisites:
1. Install Python
https://www.python.org/downloads/

2. Install pip
https://pip.pypa.io/en/stable/installing/

3. Install virtualenv
https://virtualenv.pypa.io/en/stable/installation/

Getting Started for local server:

1. Set up virtual env
virtualenv env

2. Launch virtual env
(OSX) source env/bin/activate
(Windows) \env\Scripts\activate

3. Install requirements
pip install -r requirements.txt

4. Launch server
python app.py

5. Open in browser
http://127.0.0.1:5000/
