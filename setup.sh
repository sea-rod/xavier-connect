cd ../
mkvirtualenv --python=/usr/bin/python3.10 mysite-virtualenv
cd ./xavier-connect
echo -e '\n\n ########## Installing python packages ###########'
pip3 install -r ./xconnect_backend/requirements.txt
wait
### django setup ###
cd ./xconnect_backend
python3 manage.py migrate
wait
python manage.py collectstatic
wait

